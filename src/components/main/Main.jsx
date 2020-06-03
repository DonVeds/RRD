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
        <Route path="/profile" render={() => <Profile profilePageData={props.state.profilePageData} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>} />
          <Route path="/messages" render = { () => <Messages messagesPageData={props.state.messagesPageData} />} />
          <Route path="/music"    render = { () => <Music/> }/>
        </Switch>
      </div>

  );
}

export default Main;