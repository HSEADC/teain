import React, { useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import logo from '../../../images/index/logo.svg'
import './O_NavBar.scss'
import A_SearchIcon from '../../../images/index/A_SearchIcon.svg'
import SearchBar from '../O_SearchBar/O_SearchBar'

const O_NavBar = () => {

  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(prevShowSearch => !prevShowSearch);
  };


  return (
    <header className="O_NavBar">
      <div className="W_NavBar">
        <div className="A_Logo">
          <a href="/zavarka">
            <img alt="logo" src={logo} />
          </a>
        </div>
        <div className="Q_BurgerIcon">
          <Menu right>
            <div className={`M_SearchIcon ${showSearch ? 'active' : ''}`}>
              <button aria-hidden="true" id="searchBtn" onClick={toggleSearch}>
                <img alt="search" src={A_SearchIcon} />
              </button>
              {showSearch && <SearchBar />}
            </div>
            <a className="A_Text" href="/zavarka/typesoftea.html?category=tea_types">чай</a>
            <a className="A_Text" href="/zavarka/recipes.html">рецепты</a>
            <a className="A_Text" href="/zavarka/media.html">медиа</a>
            <a className="A_Text" href="/zavarka/media.html">поиск</a>

          </Menu>
        </div>
        <nav className="W_NavBarCat">
          <ul className="C_NavBarCat">
            <li>
              <a className="A_chapter" href="/zavarka/typesoftea.html?category=tea_types">чай</a>
            </li>
            <li>
              <a className="A_chapter" href="/zavarka/recipes.html">рецепты</a>
            </li>
            <li>
              <a className="A_chapter" href="/zavarka/media.html">медиа</a>
            </li>

          </ul>
          <div  className={`M_SearchIcon ${showSearch ? 'active' : ''}`}>
            <button aria-hidden="true" id="searchBtn" onClick={toggleSearch}>
              <img alt="search" src={A_SearchIcon} />
            </button>
            {showSearch && <SearchBar />}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default O_NavBar;
