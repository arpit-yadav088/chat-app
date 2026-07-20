import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useGetAllUsers from "../../context/useGetAllUsers";
import useConversation from "../../statemanage/useConversation";
import toast from "react-hot-toast";

function Search() {
  const [search, setSearch] = useState("");
  const [allUsers] = useGetAllUsers();
  const { setSelectedConversation } = useConversation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search.trim()) return;

    const conversation = allUsers.find((user) =>
      user.fullname?.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("User not found");
    }
  };

  return (
    <div className="px-4 py-3 border-b border-gray-700">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center gap-3">

          {/* Search Input */}
          <div className="flex items-center bg-[#202C33] rounded-full px-4 py-3 flex-1 border border-transparent focus-within:border-green-500 transition-all">

            <FaSearch className="text-gray-400 mr-3" />

            <input
              type="text"
              placeholder="Search or start new chat"
              className="bg-transparent outline-none text-white w-full placeholder:text-gray-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 duration-300 flex items-center justify-center"
          >
            <FaSearch className="text-white text-lg" />
          </button>

        </div>
      </form>
    </div>
  );
}

export default Search;