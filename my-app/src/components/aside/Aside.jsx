import React from "react";
import "./Aside.css"
import {Link, BrowserRouter} from "react-router-dom"

const Aside = () => {
  return (
      <aside className="Aside">
        <ul className="Aside-links">
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/messages">Messages</Link>
          </li>
          <li>
            <Link to="/music">Music</Link>
          </li>
        </ul>
      </aside>
  );
};

export default Aside; 