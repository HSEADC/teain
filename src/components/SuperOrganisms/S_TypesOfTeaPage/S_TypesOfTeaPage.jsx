import React, { useEffect, useState } from 'react'
import M_Banner from '../../Molecules/M_Banner/M_Banner'
import base from '../../../airtable'
import './S_TypesOfTeaPage.scss'

import logo from '../../../images/index/logo.svg'
import A_SearchIcon from '../../../images/index/A_SearchIcon.svg'
import A_Text from '../../Atoms/A_Text/A_Text'
import O_PreArticle from '../../Organisms/O_PreArticle/O_PreArticle'
import O_TeaType from '../../Organisms/O_TeaType/O_TeaType'


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
      <header className="O_NavBar">
        <div className="W_NavBar">
          <div className="A_Logo">
            <a href="../index.html">
              <img alt="" src={logo} />
            </a>
          </div>
          <nav className="W_NavBarCat">
            <ul className="C_NavBarCat">
              <li>
                <a className="A_chapter" href="#">
                  о нас
                </a>
              </li>
              <li>
                <a className="A_chapter" href="#">
                  чай
                </a>
              </li>
              <li>
                <a className="A_chapter" href="#">
                  рецепты
                </a>
              </li>
              <li>
                <a className="A_chapter" href="#">
                  медиа
                </a>
              </li>
            </ul>
            <div className="M_SearchIcon">
              <input
                className="A_SearchInput"
                placeholder="поиск"
                type="text"
              />
              <button aria-hidden="true" id="searchBtn">
                <img alt="" src={A_SearchIcon} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      <M_Banner />
      <O_PreArticle
        link={link}
        link_text={link_text}
        right_text={right_text}
        translated_name={translated_name}
      />
      {bottom_text && (
        <div className="W_Container">
          <A_Text className="A_Lead">{bottom_text}</A_Text>
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
