import React from "react";
import "./Header.css"

const Header = () => {
  return (
    <header className="Header">
      <img
        className="Header-img"
        src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/ferry_26f4.png"
        alt=""
        srcset=""
      />
      <h1 className="Header-name">Best Social Network for not alone people</h1>
    </header>
  );
};


export default Header;
