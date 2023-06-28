import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import store from "../utils/store";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [liveMessage, setLiveMessage] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          messages: "This is a example for Live chat",
        })
      );
    }, 2000);
    return () => clearInterval(interval);
  });

  return (
    <div className=" ml-2 border border-black w-full h-[400px] bg-slate-100 rounded-lg flex flex-col-reverse">
      <form
        className="flex mt-1"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Venu Vk",
              messages: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="mx-2 border border-black w-full pl-3 mb-2"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        {/* <button className="ml-2 p-1 bg-blue-100 rounded-lg">Send</button> */}
      </form>
      <div className="ml-1 p-2 overflow-y-auto flex flex-col-reverse h-[360px]">
        {chatMessages.map((item, index) => {
          return (
            <ChatMessage key={index} name={item.name} message={item.messages} />
          );
        })}
      </div>
      <hr />
      <div className="p-2 bg-slate-100 rounded-lg border border-b-gray-300">
        Top Chat
      </div>
    </div>
  );
};

export default LiveChat;
