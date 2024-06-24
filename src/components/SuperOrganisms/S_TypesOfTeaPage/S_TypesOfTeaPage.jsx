import React, { useEffect, useState } from 'react'
import M_Banner from '../../Molecules/M_Banner/M_Banner'
import base from '../../../airtable'
import A_Text from '../../Atoms/A_Text/A_Text'

base('categories')
  .select({})
  .eachPage(
    function page(records, fetchNextPage) {
      records.forEach(function (record) {
        console.log('Retrieved', record.get('Name'))
      })
      fetchNextPage()
    },
    function done(err) {
      if (err) {
        console.error(err)
      }
    }
  )

const S_TypesOfTeaPage = () => {
  const [page, setPage] = useState('')

  useEffect(() => {
    const path = window.location.pathname
    const page = path.split('/').pop()
    setPage(page)
  }, [])
  return (
    <>
      <header className="O_NavBar">
        <div className="W_NavBar">
          <div className="A_Logo">
            <a href="../index.html">
              <img alt="" src="./images/index/logo.svg" />
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
                <img alt="" src="./images/index/A_SearchIcon.svg" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      <M_Banner imgPath={'../images/index/banner.jpg'} />
      <div className="O_PreArticle">
        <A_Text className="A_Title2Helios">ферментация</A_Text>
        <div className="W_TextLink">
          <p className="A_Text">{}</p>
          <a className="A_Link" href="#">
            Как правильно заваривать чай разной ферментации?
          </a>
        </div>
      </div>
      <div className="W_Container">
        <p className="A_Lead">
          Все классические чаи можно разделить только на&nbsp;пять видов
          по&nbsp;степени ферментации. Задача организации,
          в&nbsp;особенности&nbsp;же постоянное информационно-пропагандистское
          обеспечение нашей деятельности позволяет оценить значение
          соответствующий условий активизации.
        </p>
      </div>
    </>
  )
}

export default S_TypesOfTeaPage
