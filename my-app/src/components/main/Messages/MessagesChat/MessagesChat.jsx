import React from "react";
// import "./Messages.css";

const Chat = (props) => {


const ChatMessage = (props) => {
  return <div className="chat-message">{props.message}</div>;
};

let messagesElements = props.messages.map((m) => (
  <ChatMessage message={m.message} />
));

  return <div className="Messsages-chat">{messagesElements}</div>;
}

export default Chat;