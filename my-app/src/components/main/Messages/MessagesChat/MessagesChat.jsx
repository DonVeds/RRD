import React from "react";
// import "./Messages.css";

const ChatMessage = (props) => {
  return <div className="chat-message">{props.message}</div>;
};

let messagesData = [
  { id: "1", message: "Hi" },
  { id: "2", message: "How are you?" },
  { id: "3", message: "What a good day" },
  { id: "4", message: "We are near shipyard" },
  { id: "5", message: "Karamba" },
];

let messagesElements = messagesData.map((m) => (
  <ChatMessage message={m.message} />
));

const Chat = () => {
  return <div className="Messsages-chat">{messagesElements}</div>;
}

export default Chat;