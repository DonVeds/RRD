import React from "react";
import "./Messages.css";
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
  return (
    <NavLink to={"/messages/"+props.id} className="dialogs-item">
      {props.name}
    </NavLink>
  );
};

const ChatMessage = (props) => {
  return <div className="chat-message">{props.message}</div>;
};

const Messages = () => {
  return (
    <div className="Messages">
      <div className="Messages-dialogs">
        <DialogsItem id="1" name="Misha" />
        <DialogsItem id="2" name="Masha" />
        <DialogsItem id="3" name="Mosha" />
        <DialogsItem id="4" name="Musha" />
        <DialogsItem id="5" name="Mesha" />
      </div>
      <div className="Messsages-chat">
        <ChatMessage message="Hi" />
        <ChatMessage message="How are you?" />
        <ChatMessage message="What a good day" />
      </div>
    </div>
  );
};

export default Messages;
