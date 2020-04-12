import React from "react";
import "./Aside.css"

const Aside = () => {
  return (
    <aside className="Aside">
      <ul className="Aside-links">
        <li>
          <a className="Aside-link" href="#">Name</a>
        </li>
        <li>
          <a className="Aside-link" href="#">Posts</a>
        </li>
        <li>
          <a className="Aside-link" href="#">Profile</a>
        </li>
      </ul>
    </aside>
  );
};

export default Aside; 