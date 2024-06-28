import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import logo from '../../../images/index/logo.svg'
import './O_NavBar.scss'
import A_SearchIcon from '../../../images/index/A_SearchIcon.svg'

const O_NavBar = () => {




  return (
    <header className="O_NavBar">
      <div className="W_NavBar">
        <div className="A_Logo">
          <a href="./../../../index.html">
            <img alt="logo" src={logo} />
          </a>
        </div>
        <div className="Q_BurgerIcon">
          <Menu right>
            <a className="A_Text" href="#">о нас</a>
            <a className="A_Text" href="../../../tea.html">чай</a>
            <a className="A_Text" href="../../../recipes.html">рецепты</a>
            <a className="A_Text" href="../../../media.html">медиа</a>
            <a className="A_Text" href="../../../media.html">поиск</a>
          </Menu>
        </div>
        <nav className="W_NavBarCat">
          <ul className="C_NavBarCat">
            <li>
              <a className="A_chapter" href="#">о нас</a>
            </li>
            <li>
              <a className="A_chapter" href="../../../tea.html">чай</a>
            </li>
            <li>
              <a className="A_chapter" href="../../../recipes.html">рецепты</a>
            </li>
            <li>
              <a className="A_chapter" href="../../../media.html">медиа</a>
            </li>
          </ul>
          <div className="M_SearchIcon">
            <input className="A_SearchInput" placeholder="поиск" type="text" />
            <button aria-hidden="true" id="searchBtn">
              <img alt="search" src={A_SearchIcon} />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default O_NavBar;
