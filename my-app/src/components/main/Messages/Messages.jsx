import React from "react";
import "./Messages.css"

const Messages = () => {
  return (
    <div className="Messages">
      <div className="Messages-dialogs">
        <div className="dialogs-item active">Misha</div>
        <div className="dialogs-item">Masha</div>
        <div className="dialogs-item">Mosha</div>
        <div className="dialogs-item">Musha</div>
        <div className="dialogs-item">Mesha</div>
      </div>
      <div className="Messsages-chat">
        <div className="chat-message">Hi</div>
        <div className="chat-message">How are you?</div>
        <div className="chat-message">What a good day!</div>
      </div>
    </div>
  );
};

export default Messages;
