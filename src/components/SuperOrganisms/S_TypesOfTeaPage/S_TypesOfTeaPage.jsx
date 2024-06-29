import React, { useEffect, useState } from 'react'
import M_Banner from '../../Molecules/M_Banner/M_Banner'
import base from '../../../airtable'
import './S_TypesOfTeaPage.scss'
import A_Text from '../../Atoms/A_Text/A_Text'
import O_PreArticle from '../../Organisms/O_PreArticle/O_PreArticle'
import O_TeaType from '../../Organisms/O_TeaType/O_TeaType'
import O_NavBar from '../../Organisms/O_NavBar/O_NavBar'


const S_TypesOfTeaPage = () => {

  let category = "tea_types"
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    category = params.get('category')
  }, [])



  const [translated_name, setTranslatedName] = useState('')
  const [right_text, setRightText] = useState('')
  const [link, setLink] = useState('')
  const [link_text, setLinkText] = useState('')
  const [bottom_text, setBottomText] = useState('')

  const [types, setTypes] = useState([])

  useEffect(() => {
    base('categories')
      .select({
        filterByFormula: `{Name} = '${category}'`,
        fields: [
          'translated_name',
          'right_text',
          'link',
          'link_text',
          'bottom_text'
        ] // replace with the actual field names you want to retrieve
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            setTranslatedName(record.get('translated_name'))
            setRightText(record.get('right_text'))
            setLink(record.get('link'))
            setLinkText(record.get('link_text'))
            setBottomText(record.get('bottom_text'))
          })
          fetchNextPage()
        },
        function done(err) {
          if (err) {
            console.error(err)
          }
        }
      )
    base(`${category}`)
      .select({})
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            setTypes((prev) => [...prev, record.fields])
          })
          fetchNextPage()
        },
        function done(err) {
          if (err) {
            console.error(err)
          }
        }
      )
  }, [])
  console.log(types)

  return (
    <>
      <O_NavBar/>

      <M_Banner />
      <O_PreArticle
        link={"media/article.html"}
        link_text={link_text}
        right_text={right_text}
        translated_name={translated_name}
      />
      {bottom_text && (
        <div className="W_Container">
          <A_Text className="A_Lead">Чай&nbsp;&mdash; это не&nbsp;просто напиток, а&nbsp;целая культура, богатая разнообразием вкусов и&nbsp;ароматов. От&nbsp;древних китайских сортов, с&nbsp;каждым листочком раскрывающих свою уникальную историю, до&nbsp;современных экзотических вариантов, собранных с&nbsp;самых отдаленных уголков планеты.</A_Text>
        </div>
      )}

      {types.map((type, index) => (
        <div className="W_TeaType" key={index}>
          <O_TeaType object={type} index={index}></O_TeaType>
        </div>
      ))}
    </>
  )
}

export default S_TypesOfTeaPage
