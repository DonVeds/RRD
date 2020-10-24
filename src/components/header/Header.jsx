import React from "react";
import "./Header.css"

const Header = () => {
  return (
    <header className="Header">
      <h1 className="Header-title">Hello, Ariel! What's up?</h1>
      <div className="Header-searchBar">
        <div className="searchBar-buttonsBar">
          <img src="/svg/envelope.svg" alt="Messages" className="Header-messages"/>
          <img src="/svg/heart.svg" alt="Likes" className="Header-likes"/>
        </div>
        <div className="searchBar-searchField">
          <img src="/svg/magnifying-glass.svg" alt=""/>
          <input type="text" name="" placeholder="Search..."/>
        </div>
      </div>
    </header>
  );
};


export default Header;
