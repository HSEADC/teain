import React, { useEffect, useState } from 'react'
import Fuse from 'fuse.js'
import base from '../../../airtable' // Импортируйте вашу базу Airtable
import './O_SearchBar.scss'

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const localData = localStorage.getItem('searchData');
      if (localData) {
        setData(JSON.parse(localData));
      } else {
        const teaData = [];
        const recipesData = [];

        try {
          // Загрузка данных чая
          await base('tea').select({}).eachPage((records, fetchNextPage) => {
            records.forEach(record => {
              const fields = record.fields;
              teaData.push(fields);
            });
            fetchNextPage();
          });

          // Загрузка данных рецептов
          await base('recipes').select({}).eachPage((records, fetchNextPage) => {
            records.forEach(record => {
              const fields = record.fields;
              recipesData.push(fields);
            });
            fetchNextPage();
          });

          const combinedData = [
            ...teaData.map(item => ({
              type: 'tea',
              top_name: item.top_name,
              bottom_name: item.bottom_name,
              translated_type_name: item.translated_type_name,
            })),
            ...recipesData.map(item => ({
              type: 'recipe',
              translated_name: item.translated_name,
              translated_tag_names: item.translated_tag_names,
            })),
          ];

          setData(combinedData);
          localStorage.setItem('searchData', JSON.stringify(combinedData));
        } catch (error) {
          console.error("Error loading data:", error);
        }
      }
    };
    loadData();
  }, []);

  const handleSearch = (event) => {
    const keyword = event.target.value;
    setQuery(keyword);
    if (keyword.length > 2) {
      const fuse = new Fuse(data, {
        keys: ['top_name', 'bottom_name', 'translated_type_name', 'description', 'translated_name', 'translated_tag_names'],
        threshold: 0.2,
      });
      const result = fuse.search(keyword);
      setResults(result.map(r => {
        const item = r.item;
        let matchedTag = '';
        if (item.translated_tag_names && item.translated_tag_names.length > 0) {
          const matchedTags = item.translated_tag_names.filter(tag => tag.includes(keyword));
          if (matchedTags.length > 0) {
            matchedTag = matchedTags.join(', ');
          }
        }
        return { ...item, matchedTag };
      }));
    } else {
      setResults([]);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && query.length > 2) {
      window.location.href = `../../../searchResult.html?query=${query}`;
    }
  };

  const handleResultClick = (query) => {
    window.location.href = `../../../searchResult.html?query=${query}`;
  };

  return (
    <div className="O_SearchBar">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        onKeyPress={handleKeyPress}
        placeholder="Поиск..."
      />
      {results.length > 0 && (
        <ul className="C_SearchResults">
          {results.map((item, index) => (
            <li key={index} onClick={() => handleResultClick(query)}>
              {item.type === 'tea'
                ? `Чай: ${item.top_name} ${item.bottom_name} `
                : `Рецепт: ${item.translated_name}`}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
