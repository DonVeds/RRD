import React from "react";
import "./Main.css";
import Profile from "./Profile/Profile"
import Messages from "./Messages/Messages"
import Music from "./Music/Music"
import {Route, BrowserRouter} from "react-router-dom"

const Main = () => {
  return (
    <BrowserRouter>
      <div className="Main">
        <hr />
        <Route path="/profile" component={Profile} />
        <Route path="/messages" component={Messages} />
        <Route path="/music" component={Music} />
      </div>
    </BrowserRouter>
  );
}

export default Main;