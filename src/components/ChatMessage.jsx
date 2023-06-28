import React from "react";
import userIcon from "../images/user-icon.png";

const ChatMessage = ({name, message}) => {
  return (
    <div className="flex items-center p-1">
      <img className="h-5" src={userIcon} alt="user-icon" />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
    
  );
};

export default ChatMessage;
