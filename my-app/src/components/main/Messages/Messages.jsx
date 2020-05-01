import React from "react";
import "./Messages.css";

import Dialogs from './MessagesDialogs/MessagesDialogs'
import Chat from './MessagesChat/MessagesChat'

const Messages = () => {
  return (
    <div className="Messages">
      <Dialogs/>
      <Chat/>
    </div>
  );
};

export default Messages;
