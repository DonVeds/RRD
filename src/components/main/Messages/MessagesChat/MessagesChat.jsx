import React from "react";
import "./MessagesChat.css";

const Chat = (props) => {  
  const ChatMessage = (props) => {
    return <div className="chat-message">{props.message}</div>;
  };

  let messagesElements = props.messages.map((m) => (
    <ChatMessage message={m.message} />
  ));

  let newMessage = React.useRef(null);

  let sendMessage = () => {
    let text = newMessage.current.value;
    alert(text);
  };

  return (
    <div className="Messages-chat">
      {messagesElements}
      <div className="Messages-chat-inputField">
        <input className="Messages-chat-inputField-input" placeholder=" New message..." ref={newMessage} cols="30" rows="5"></input>
        <button className="Messages-chat-inputField-btn" onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chat;