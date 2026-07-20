import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Message = ({ message }) => {
  const authUser = JSON.parse(localStorage.getItem("messenger")) || {};

  const myId = String(authUser._id || "").trim();
  const senderId = String(message.senderId || "").trim();

  const itsMe = myId === senderId;

  const formattedTime = new Date(message.createdAt).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      className={`flex items-end gap-2 mb-4 ${
        itsMe ? "justify-end" : "justify-start"
      }`}
    >

      {!itsMe && (
        <div className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0">
          <FaUserCircle className="text-2xl text-gray-300" />
        </div>
      )}

      <div
        className={`relative px-4 py-3 rounded-2xl shadow-lg transition-all duration-300
        max-w-[85%] sm:max-w-[75%] md:max-w-[65%]
        ${
          itsMe
            ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-br-md"
            : "bg-slate-800 border border-slate-700 text-white rounded-bl-md"
        }`}
      >
        <p className="text-[15px] leading-6 break-words">
          {message.message}
        </p>

        <div
          className={`flex justify-end items-center gap-1 mt-2 text-[11px]
          ${itsMe ? "text-blue-100" : "text-gray-400"}`}
        >
          <span>{formattedTime}</span>

          {itsMe && <span>✓✓</span>}
        </div>
      </div>

      {itsMe && (
        <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
          <FaUserCircle className="text-2xl text-white" />
        </div>
      )}
    </div>
  );
};

export default Message;