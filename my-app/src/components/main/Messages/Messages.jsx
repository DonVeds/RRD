import React from "react";
import "./Messages.css";

import Dialogs from './MessagesDialogs/MessagesDialogs'
import Chat from './MessagesChat/MessagesChat'

const Messages = (props) => {
  return (
    <div className="Messages">
      <Dialogs dialogs={props.messagesPageData.dialogs}/>
      <Chat messages={props.messagesPageData.messages}/>
    </div>
  );
};

export default Messages;
