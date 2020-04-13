import React from "react";
import "./Main.css";
import Profile from "./Profile/Profile"
import Messages from "./Messages/Messages"
import Music from "./Music/Music"
import { Router, Route, Link, Switch } from "react-router-dom";

const Main = () => {
  return (
    <Router>
      <div className="Main">
        <hr />
        <Link to="/profile">Profile</Link>
        <Link to="/messages">Messages</Link>
        <Link to="/music">Music</Link>

        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/messages" component={Messages} />
          <Route path="/music" component={Music} />
        </Switch>
      </div>
    </Router>
  );
}

export default Main;