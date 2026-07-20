import React from "react";
import useConversation from "../../statemanage/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";

const User = ({ user }) => {
  const { selectedConversation, setSelectedConversation } =
    useConversation();

  const { onlineUsers } = useSocketContext();

  const isOnline = onlineUsers?.includes(user._id);
  const isSelected = selectedConversation?._id === user._id;

  return (
    <div
      onClick={() => setSelectedConversation(user)}
      className={`cursor-pointer px-4 py-3 transition-all duration-300 border-b border-[#2A3942]
      ${
        isSelected
          ? "bg-[#2A3942]"
          : "hover:bg-[#202C33]"
      }`}
    >
      <div className="flex items-center gap-4">

        {/* Avatar */}
        <div className="relative flex-shrink-0">
          <img
            src="https://img.daisyui.com/images/profile/demo/gordon@192.webp"
            alt="profile"
            className="w-14 h-14 rounded-full object-cover"
          />

          {isOnline && (
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-[#111B21] rounded-full"></span>
          )}
        </div>

        {/* User Info */}
        <div className="flex-1 overflow-hidden">
          <h2 className="text-white font-semibold text-lg truncate">
            {user.name}
          </h2>

          <p className="text-sm text-gray-400 truncate">
            {user.email}
          </p>
        </div>

        {/* Time */}
        <div className="text-xs text-gray-500">
          10:45 PM
        </div>

      </div>
    </div>
  );
};

export default User;