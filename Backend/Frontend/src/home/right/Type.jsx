// import React, { useState } from "react";
// import { IoSend } from "react-icons/io5";
// import useSendMessage from "../../context/useSendMessage.js";

// const Type = () => {
//   const [message, setMessage] = useState("");
//   const { loading, sendMessages } = useSendMessage();

//   const handleSubmit = async (e) => {
//     console.log(e);
//     e.preventDefault();
//     await sendMessages(message);
//     setMessage("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="flex space-x-1 h-[8vh]  bg-gray-800">
//         <div className=" w-[70%] mx-4">
//           <input
//             type="text"
//             placeholder="Type here"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             className="border-[1px] border-gray-700  flex items-center w-full py-3 px-3 rounded-xl grow outline-none bg-slate-900 mt-1"
//           />
//         </div>
//         <button>
//           <IoSend className="text-3xl" />
//         </button>
//       </div>
//     </form>
//   );
// }

// export default Type;

import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import useSendMessage from "../../context/useSendMessage.js";

const Type = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessages } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    await sendMessages(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="border-t border-slate-700 bg-slate-900 p-4">
      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="
            flex-1
            h-12
            px-4
            rounded-full
            bg-slate-800
            text-white
            placeholder:text-slate-400
            border border-slate-600
            focus:outline-none
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-500/30
            transition-all
          "
        />

        <button
          type="submit"
          disabled={loading}
          className="
            h-12
            w-12
            rounded-full
            bg-blue-600
            hover:bg-blue-700
            flex
            items-center
            justify-center
            transition-all
            disabled:opacity-50
          "
        >
          <IoSend className="text-xl text-white" />
        </button>
      </div>
    </form>
  );
};

export default Type;
