import React, { useEffect, useState } from 'react'
import M_TeaCard from '../../Molecules/M_TeaCard/M_TeaCard'
import base from '../../../airtable'

const C_Teas = () => {

  const [teas, setTeas] = useState([])

  useEffect(() => {
    base('tea').select({
      filterByFormula: '{new} = TRUE()', 
      maxRecords: 4,
    }).eachPage((records, fetchNextPage) => {
      const loadedTeas = records.map(record => record);
      setTeas(prev => [...prev, ...loadedTeas]);
      fetchNextPage();
    }, (err) => {
      if (err) {
        console.error(err);
      }
    });
  }, []);


  useEffect(() => {
    console.log(teas)
  }, [teas])



  return (
    <div className="C_Teas C_TeaTypeCards">
      {teas.map((tea, index) =>
      <M_TeaCard key={index} imgPathStor={tea.fields.image[0].url} bottom_nameS={tea.fields.bottom_name} top_nameS={tea.fields.top_name}  id={tea.id} />
      )}
    </div>
  )
}

export default C_Teas