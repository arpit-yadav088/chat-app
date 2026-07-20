import React, { useEffect } from "react";
import Chatuser from "./Chatuser";
import Messages from "./Messages";
import Type from "./Type";
import useConversation from "../../statemanage/useConversation";
import { useAuth } from "../../context/AuthProvider";
import { CiMenuFries } from "react-icons/ci";
import { BsChatSquareDots } from "react-icons/bs";

const Right = () => {
  const { selectedConversation, setSelectedConversation } =
    useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, []);

  return (
    <div className="flex-1 h-screen bg-slate-950 flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <Chatuser />

          <div className="flex-1 overflow-y-auto px-5 py-4">
            <Messages />
          </div>

          <Type />
        </>
      )}
    </div>
  );
};

export default Right;

const NoChatSelected = () => {
  const { authUser } = useAuth();

  return (
    <div className="relative flex-1 flex items-center justify-center">

      <label
        htmlFor="my-drawer-2"
        className="btn btn-ghost drawer-button lg:hidden absolute top-4 left-4"
      >
        <CiMenuFries className="text-2xl text-white" />
      </label>

      <div className="text-center">

        <div className="mx-auto w-28 h-28 rounded-full bg-slate-800 flex items-center justify-center shadow-lg">
          <BsChatSquareDots className="text-5xl text-blue-500" />
        </div>

        <h1 className="mt-8 text-4xl font-bold text-white">
          Hello, {authUser?.user?.name}
        </h1>

        <p className="mt-3 text-gray-400 text-lg">
          Select a conversation and start chatting.
        </p>

      </div>
    </div>
  );
};