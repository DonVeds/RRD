import React from "react";
import "./Aside.css"

const Aside = () => {
  return (
    <aside className="Aside">
      <ul className="Aside-links">
        <li>
          <a className="Aside-link" href="/profile">Profile</a>
        </li>
        <li>
          <a className="Aside-link" href="/messages">Messages</a>
        </li>
        <li>
          <a className="Aside-link" href="/music">Music</a>
        </li>
      </ul>
    </aside>
  );
};

export default Aside; 