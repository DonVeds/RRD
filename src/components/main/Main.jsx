import React from "react";
import "./Main.css";
import Profile from "./Profile/Profile"
import Messages from "./Messages/Messages"
import { Route, Switch } from "react-router-dom";

const Main = (props) => {
  return (

      <div className="Main">

        <Switch>
          <Route path="/profile" render={() => <Profile profilePageData={props.state.profilePageData} dispatch={props.dispatch}/>} />
          <Route path="/messages" render = { () => <Messages messagesPageData={props.state.messagesPageData} />} />
        </Switch>
      </div>

  );
}

export default Main;