
import React from "react";
import useConversation from "../../statemanage/useConversation";
import { useSocketContext } from "../../context/SocketContext";

const Chatuser = () => {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();

  if (!selectedConversation) {
    return (
      <div className="h-[10vh] px-5 flex items-center bg-gray-800">
        <h1 className="text-xl text-white">Select a user to chat</h1>
      </div>
    );
  }

  // online check
  const isOnline =
    Array.isArray(onlineUsers) &&
    onlineUsers.map(String).includes(String(selectedConversation._id));

  return (
    <div className="h-[10vh] px-5 flex items-center space-x-4 bg-gray-800 hover:bg-gray-700 duration-300">

      {/* Avatar + Green Dot */}
      <div className="relative">
        <img
          src="https://img.daisyui.com/images/profile/demo/gordon@192.webp"
          alt="user"
          className="w-12 h-12 rounded-full object-cover"
        />

        {isOnline && (
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-800"></span>
        )}
      </div>

      {/* User Info */}
      <div>
        <h1 className="text-xl">{selectedConversation.name}</h1>

        <span className="text-sm text-gray-300">
          {isOnline ? "Online" : "Offline"}
        </span>
      </div>
    </div>
  );
};

export default Chatuser;