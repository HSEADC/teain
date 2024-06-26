import React from 'react'
import logo from '../../../images/index/logo.svg'

import A_SearchIcon from '../../../images/index/A_SearchIcon.svg'

const O_NavBar = () => {
  return (
      <header className="O_NavBar">
        <div className="W_NavBar">
          <div className="A_Logo">
            <a href="../../../index.html">
              <img alt="" src={logo} />
            </a>
          </div>
          <nav className="W_NavBarCat">
            <ul className="C_NavBarCat">
              <li>
                <a className="A_chapter" href="../../../typesoftea.html">чай</a>
              </li>
              <li>
                <a className="A_chapter" href="../../../recipes.html">рецепты</a>
              </li>
              <li>
                <a className="A_chapter" href="#">медиа</a>
              </li>
            </ul>
            <div className="M_SearchIcon">
                  <input className="A_SearchInput" placeholder="поиск" type="text" />
                  <button aria-hidden="true" id="searchBtn">
                  <img alt="" src={A_SearchIcon} />
                  </button>
            </div>
          </nav>
        </div>
      </header>
  )
}

export default O_NavBar