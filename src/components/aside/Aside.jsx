import React from "react";
import "./Aside.css"
import {NavLink} from "react-router-dom"

const Aside = () => {
  return (
    <aside className="Aside">
      <ul className="Aside-links">
        <li>
          <NavLink
            activeClassName="activeAsideLink"
            className="Aside-link"
            to="/profile"
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="activeAsideLink"
            className="Aside-link"
            to="/messages"
          >
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="activeAsideLink"
            className="Aside-link"
            to="/music"
          >
            Music
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Aside; 