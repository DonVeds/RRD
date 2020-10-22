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
            to="/messages"
            >
            Messages
          </NavLink>
          <NavLink
            activeClassName="activeAsideLink"
            className="Aside-link"
            to="/music"
            >
            Music
          </NavLink>
        </div>
      </div>
    </aside>
  );
};

export default Aside; 