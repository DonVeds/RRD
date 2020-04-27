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

let dialogsData = [
  {id:"1", name:"Misha"},
  {id:"2", name:"Masha"},
  {id:"3", name:"Mosha"},
  {id:"4", name:"Musha"},
  {id:"5", name:"Mesha"}
]

let messagesData = [
  { id: "1", message: "Hi" },
  { id: "2", message: "How are you?" },
  { id: "3", message: "What a good day" },
  { id: "4", message: "We are near shipyard" },
  { id: "5", message: "Karamba" },
];

const Messages = () => {
  return (
    <div className="Messages">
      <div className="Messages-dialogs">
        <DialogsItem id={dialogsData[0].id} name={dialogsData[0].name} />
        <DialogsItem id={dialogsData[1].id} name={dialogsData[1].name} />
        <DialogsItem id={dialogsData[2].id} name={dialogsData[2].name} />
        <DialogsItem id={dialogsData[3].id} name={dialogsData[3].name} />
        <DialogsItem id={dialogsData[4].id} name={dialogsData[4].name} />
      </div>
      <div className="Messsages-chat">
        <ChatMessage message={messagesData[0].message} />
        <ChatMessage message={messagesData[1].message} />
        <ChatMessage message={messagesData[2].message} />
        <ChatMessage message={messagesData[3].message} />
        <ChatMessage message={messagesData[4].message} />
      </div>
    </div>
  );
};

export default Messages;
