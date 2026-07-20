import React from "react";
import Search from "./Search";
import Users from "./Users";
import { FaComments } from "react-icons/fa";

const Left = () => {
  return (
    <div className="w-full md:w-[35%] lg:w-[30%] h-screen bg-[#111B21] border-r border-gray-700 flex flex-col">

      {/* Header */}
      <div className="px-5 py-4 border-b border-gray-700">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
            <FaComments className="text-white text-xl" />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-white">Chats</h1>
            <p className="text-sm text-gray-400">
              Start a new conversation
            </p>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="p-4">
        <Search />
      </div>

      {/* Divider */}
      <div className="border-b border-gray-700"></div>

      {/* Users */}
      <div className="flex-1 overflow-y-auto">
        <Users />
      </div>

    </div>
  );
};

export default Left;