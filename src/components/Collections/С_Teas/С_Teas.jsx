import React, { useEffect, useState } from 'react'
import M_TeaCard from '../../Molecules/M_TeaCard/M_TeaCard'
import base from '../../../airtable'

const C_Teas = () => {

  const [teas, setTeas] = useState([])

  useEffect(() => {
    base('tea').select({
      filterByFormula: '{new} = TRUE()', // Фильтрация по полю new
      maxRecords: 4, // Ограничение на количество записей
    }).eachPage((records, fetchNextPage) => {
      const loadedTeas = records.map(record => record.fields);
      setTeas(prev => [...prev, ...loadedTeas]);
      fetchNextPage();
    }, (err) => {
      if (err) {
        console.error(err);
      }
    });
  }, []);



  return (
    <div className="C_Teas C_TeaTypeCards">
      {teas.map((tea, index) =>
      <M_TeaCard key={index} imgPathStor={tea.image[0].url} bottom_nameS={tea.bottom_name} top_nameS={tea.top_name} />
      )}
    </div>
  )
}

export default C_Teas