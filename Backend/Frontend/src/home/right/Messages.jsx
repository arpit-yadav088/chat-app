import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessage from "../../context/useGetMessage";
import Loading from "../../components/Loading";
import useGetSocketMessage from "../../context/useGetSocketMessage";

const Messages = () => {
  const { loading, messages } = useGetMessage();

  useGetSocketMessage();

  const lastMsgRef = useRef(null);

  useEffect(() => {
    if (messages.length > 0) {
      setTimeout(() => {
        lastMsgRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }, 100);
    }
  }, [messages]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 p-4 h-full">

      {messages.length > 0 ? (
        messages.map((message, index) => (
          <div
            key={message._id}
            ref={index === messages.length - 1 ? lastMsgRef : null}
          >
            <Message message={message} />
          </div>
        ))
      ) : (
        <div className="flex flex-1 justify-center items-center">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-white">
              No Messages Yet 
            </h2>

            <p className="text-gray-400 mt-2">
              Start your conversation by sending the first message.
            </p>
          </div>
        </div>
      )}

    </div>
  );
};

export default Messages;