// import React from 'react'
// import { FaSearch } from "react-icons/fa";

// const Search = () => {
//   return (
//     <div className='h-[10vh]'>
//     <div className='px-6 py-1'>
//       <form action=''>
//         <div className='flex space-x-3'>
//         <label className="`border-[1px]` border-gray-700 bg-slate-900 rounded-lg flex items-center gap-2 w-[80%] p-3">
//           <input type="search" placeholder="Search"
//           className='grow outline-none bg-slate-900'/>
//        </label>
//        <button>
//         <FaSearch className='text-4xl p-2 hover:bg-gray-600 rounded-full duration-300'/>
//         </button>
//        </div>
//       </form>
//     </div>
//   </div>
//   )
// }

// export default Search


//  <svg 
//           className="h-4 w-6 opacity-50"      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//           <g
//          strokeLinejoin="round"
//          strokeLinecap="round"
//          strokeWidth="2.5"
//          fill="none"
//          stroke="currentColor"
//         >
//        <circle cx="11" cy="11" r="8"></circle>
//         <path d="m21 21-4.3-4.3"></path>
//        </g>
//        </svg>



import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useGetAllUsers from "../../context/useGetAllUsers";
import useConversation from "../../statemanage/useConversation";
import toast from "react-hot-toast";
function Search() {
  const [search, setSearch] = useState("");
  const [allUsers] = useGetAllUsers();
  const { setSelectedConversation } = useConversation();
  console.log(allUsers);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
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
    <div className=" h-[10vh]">
      <div className="px-6 py-4">
        <form onSubmit={handleSubmit}>
          <div className="flex space-x-3">
            <label className=" border-[1px] border-gray-700 bg-slate-900 rounded-lg p-3 flex items-center gap-2 w-[80%]">
              <input
                type="text"
                className="grow outline-none bg-transparent"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </label>
            <button>
              <FaSearch className="text-5xl p-2 hover:bg-gray-600 rounded-full duration-300" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;