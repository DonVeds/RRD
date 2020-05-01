import React from "react";
import "./Main.css";
import Profile from "./Profile/Profile"
import Messages from "./Messages/Messages"
import Music from "./Music/Music"
import { Route, Switch } from "react-router-dom";

const Main = (props) => {
  return (

      <div className="Main">
        <hr />

        <Switch>
          <Route path="/profile"  render = { () => <Profile posts={props.appState.dialogs}/>}/>
          <Route path="/messages" render = { () => <Messages dialogs={props.appState.dialogs} messages={props.appState.messages}/> }/>
          <Route path="/music"    render = { () => <Music/> }/>
        </Switch>
      </div>

  );
}

export default Main;