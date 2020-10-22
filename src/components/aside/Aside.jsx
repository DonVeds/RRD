import React from "react";
import "./Aside.css"
import {NavLink} from "react-router-dom"

const Aside = () => {
  return (
    <aside className="Aside">
      <div className="Aside-fixed">
        <div className="Aside-header">
          <h1 className="Aside-title">IN TOUCH</h1>
        </div>
        <div className="Aside-profilePreview">
          <img src="/ProfileImg.png" className="profilePreview-img" alt="" srcset=""/>
          <p className="profilePreview-name">Ariel<br/>Neptunovna</p>
        </div>
        <div className="Aside-links">
          <NavLink
            activeClassName="activeAsideLink"
            className="Aside-link"
            to="/profile"
            >
            Profile
          </NavLink>
          <NavLink
            activeClassName="activeAsideLink"
            className="Aside-link"
            to="/news"
            >
            News
          </NavLink>
          <NavLink
            activeClassName="activeAsideLink"
            className="Aside-link"
            to="/friends"
            >
            Friends
          </NavLink>
          <NavLink
            activeClassName="activeAsideLink"
            className="Aside-link"
            to="/messages"
            >
            Messages
          </NavLink>
          <NavLink
            activeClassName="activeAsideLink"
            className="Aside-link"
            to="/community"
            >
            Community
          </NavLink>
          <NavLink
            activeClassName="activeAsideLink"
            className="Aside-link"
            to="/photos"
            >
            Photos
          </NavLink>
          <NavLink
            activeClassName="activeAsideLink"
            className="Aside-link"
            to="/videos"
            >
            Videos
          </NavLink>
          <NavLink
            activeClassName="activeAsideLink"
            className="Aside-link"
            to="/audios"
            >
            Audios
          </NavLink>
          <NavLink
            activeClassName="activeAsideLink"
            className="Aside-link"
            to="/settings"
            >
            Settings
          </NavLink>
        </div>
      </div>
    </aside>
  );
};

export default Aside; 