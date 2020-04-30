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
];

let dialogsElements = dialogsData.map( d => <DialogsItem id={d.id} name={d.name} />);

let messagesData = [
  { id: "1", message: "Hi" },
  { id: "2", message: "How are you?" },
  { id: "3", message: "What a good day" },
  { id: "4", message: "We are near shipyard" },
  { id: "5", message: "Karamba" },
];

let messagesElements = messagesData.map( m => <ChatMessage message={m.message}/> );


const Messages = () => {
  return (
    <div className="Messages">
      <div className="Messages-dialogs">
        { dialogsElements }
      </div>
      <div className="Messsages-chat">
        { messagesElements }
      </div>
    </div>
  );
};

export default Messages;
