import React from "react";

const Message = ({ message }) => {
  const authUser =
    JSON.parse(localStorage.getItem("messenger")) || {};

  const myId = String(authUser._id || "").trim();
  const senderId = String(message.senderId || "").trim();

  const itsMe = myId === senderId;

  const createdAt = new Date(message.createdAt);

  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      className={`flex w-full mb-2 ${
        itsMe ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`px-4 py-2 rounded-2xl max-w-[70%] text-white ${
          itsMe ? "bg-blue-500" : "bg-gray-600"
        }`}
      >
        <p>{message.message}</p>

        <p className="text-[10px] mt-1 opacity-70 text-right">
          {formattedTime}
        </p>
      </div>
    </div>
  );
};

export default Message;