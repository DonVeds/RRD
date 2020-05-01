import React from "react";
import "./Messages.css";

import Dialogs from './MessagesDialogs/MessagesDialogs'
import Chat from './MessagesChat/MessagesChat'

const Messages = (props) => {
  return (
    <div className="Messages">
      <Dialogs dialogs={props.dialogs}/>
      <Chat messages={props.messages}/>
    </div>
  );
};

export default Messages;
