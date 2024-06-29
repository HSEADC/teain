import React, { useEffect, useState } from 'react'
import Fuse from 'fuse.js'
import base from '../../../airtable'
import M_TeaCard from '../../Molecules/M_TeaCard/M_TeaCard'
import O_RecipeCard from '../../Organisms/O_RecipeCardS/O_RecipeCard'
import A_Text from '../../Atoms/A_Text/A_Text'
import O_NavBar from '../../Organisms/O_NavBar/O_NavBar' // Импортируйте вашу базу Airtable
import './S_SearchResults.scss'


const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [data, setData] = useState([]);
  const query = new URLSearchParams(window.location.search).get('query');

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
              id: item.id, // добавьте идентификатор для чая
              image: item.image
            })),
            ...recipesData.map(item => ({
              type: 'recipe',
              translated_name: item.translated_name,
              translated_tag_names: item.translated_tag_names,
              tag_names: item.tag_names,
              id: item.id, // добавьте идентификатор для рецепта
              description: item.description,
              image: item.image,
              flavour_of_the_week: item.flavour_of_the_week
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

  useEffect(() => {
    if (query && data.length > 0) {
      const fuse = new Fuse(data, {
        keys: ['top_name', 'bottom_name', 'translated_type_name', 'description', 'translated_name', 'translated_tag_names'],
        threshold: 0.2,
      });
      const result = fuse.search(query);
      setResults(result.map(r => r.item));
    }
  }, [query, data]);

  const teaResults = results.filter(item => item.type === 'tea');
  const recipeResults = results.filter(item => item.type === 'recipe');

  return (
    <>
      <O_NavBar />
      <div className="M_SectionDescription">
        <A_Text className="A_Title1">Результаты поиска</A_Text>
      </div>
      <div className="W_Container">

        {teaResults.length > 0 &&  <A_Text className="A_Title2Helios"> Чай</A_Text>}
      <div className="grid-container">
        {teaResults.map((item, index) => (
          <div key={index} className="grid-item">
            <M_TeaCard
              className=""
              id={item.id}
              imgPathStor={item.image ? item.image[0].url : null}
              top_nameS={item.top_name}
              bottom_nameS={item.bottom_name}
            />
          </div>
        ))}
      </div>

        {recipeResults.length > 0 &&       <A_Text className="A_Title2Helios"> Рецепты</A_Text>}
      <div className="grid-container">
        {recipeResults.map((item, index) => (
          <div key={index} className="grid-item">
            <O_RecipeCard
              recipe={item}
              toggleTagSelection={() => {
              }}
              activeTags={[]}
            />
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default SearchResults;
