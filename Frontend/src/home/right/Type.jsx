// import React from 'react'
// import { IoSend } from "react-icons/io5";


// const Type = () => {
//   return (
//     <>
//     <div className='flex space-x-2 h-[8vh] text-center bg-gray-700'>
//       <div className='w-[70%] mx-4 '>
//       <input 
//        type="text"
//        placeholder="Type here"
//        className="border border-gray-700 flex items-center py-3 px-3 rounded-xl input input-bordred w-full grow outline-none bg-slate-800 mt-1" />
//     </div>
//     <button className='text-2xl'>
//       <IoSend />
//     </button>
//     </div>
//     </>
//   )
// }

// export default Type



import React, { useState } from "react";
import { IoSend } from "react-icons/io5";

const Type = () => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;
    console.log(message); // send message logic here
    setMessage("");
  };

  return (
    <div className="flex items-center space-x-2 h-[8vh] px-2 bg-gray-700">
      <div className="w-[80%]">
        <input
          type="text"
          placeholder="Type here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="input input-bordered w-full bg-slate-800 text-white outline-none"
        />
      </div>

      <button
        onClick={handleSend}
        className="btn btn-circle btn-primary text-xl"
      >
        <IoSend />
      </button>
    </div>
  );
};

export default Type;
