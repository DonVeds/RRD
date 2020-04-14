import React from "react";
import "./Main.css";
import Profile from "./Profile/Profile"
import Messages from "./Messages/Messages"
import Music from "./Music/Music"
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Main = () => {
  return (

      <div className="Main">
        <hr />

        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/messages" component={Messages} />
          <Route path="/music" component={Music} />
        </Switch>
      </div>

  );
}

export default Main;