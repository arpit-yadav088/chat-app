// import React from 'react'

// const Message = (message) => {
//    const authUser = JSON.parse(localStorage.getItem("messenger"));

//    const itsMe =
//   String(message.senderId) === String(authUser?.user?._id);

//     const chatName = itsMe ? " chat-end" : "chat-start";
//      const chatColor = itsMe ? "bg-blue-500" : "";
   
//   return (
//   <>
//     <div className="p-4">
//       <div className= {`chat $(chatName)`}>
//        <div className={`chat-bubble text-white ${chatColor}`}>{message.message}</div>
//        </div>
//     </div>
//   </>
//   )
// }

// export default Message

//  //  Right code
// import React from 'react'

// const Message = ({ message }) => {
//   const authUser = JSON.parse(localStorage.getItem("messenger"));

//   // if (!message) return null;

//   // const itsMe = message.senderId === authUser?.user?._id;
//   const itsMe =
//   String(message.senderId) === String(authUser?.user?._id);

//   const chatName = itsMe ? "chat-end" : "chat-start";
//   const chatColor = itsMe ? "bg-blue-500" : "";

//     const createdAt = new Date(message.createdAt);
//   const formattedTime = createdAt.toLocaleTimeString([], {
//     hour: "2-digit",
//     minute: "2-digit",
//   });

//   return (
//     <div className="p-2">
//       <div className={`chat ${chatName}`}>
//         <div className={`chat-bubble text-white ${chatColor}`}>
//           {message.message}
//         </div>
//          <div className="chat-footer">{formattedTime}</div>
//       </div>
//     </div>
//   );
// };

// export default Message;

// //right code
// import React from "react";

// const Message = ({ message }) => {
//   const authUser = JSON.parse(localStorage.getItem("messenger"));

//   const myId = authUser?._id || authUser?.user?._id;

//   const senderId =
//     message.senderId?._id ||
//     message.senderId ||
//     message.sender?._id ||
//     message.sender;

//   const itsMe = String(senderId) === String(myId);

//   const createdAt = new Date(message.createdAt);

//   const formattedTime = createdAt.toLocaleTimeString([], {
//     hour: "2-digit",
//     minute: "2-digit",
//   });

//     console.log("message object:", message);
//   console.log("authUser object:", authUser);

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: itsMe ? "flex-end" : "flex-start",
//         marginBottom: "12px",
//         width: "100%",
//         padding: "0 8px",
//       }}
//     >
//       <div
//         style={{
//           backgroundColor: itsMe ? "#3b82f6" : "#6b7280",
//           color: "white",
//           padding: "12px 16px",
//           borderRadius: "20px",
//           maxWidth: "75%",
//           wordBreak: "break-word",
//         }}
//       >
//         <p style={{ margin: 0, fontSize: "18px" }}>
//           {message.message}
//         </p>

//         <p
//           style={{
//             margin: "6px 0 0 0",
//             fontSize: "11px",
//             opacity: 0.8,
//             textAlign: itsMe ? "right" : "left",
//           }}
//         >
//           {formattedTime}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Message;


// import React from "react";

// const Message = ({ message }) => {
//   const authUser = JSON.parse(localStorage.getItem("messenger"));

//   const itsMe =
//     String(message.senderId) === String(authUser?._id);

//   const createdAt = new Date(message.createdAt);

//   const formattedTime = createdAt.toLocaleTimeString([], {
//     hour: "2-digit",
//     minute: "2-digit",
//   });

//   return (
//     <div
//       style={{
//         width: "100%",
//         display: "flex",
//         justifyContent: itsMe ? "flex-end" : "flex-start",
//         marginBottom: "10px",
//       }}
//     >
//       <div
//         style={{
//           backgroundColor: itsMe ? "#3b82f6" : "#6b7280",
//           color: "white",
//           padding: "10px 14px",
//           borderRadius: "18px",
//           maxWidth: "70%",
//         }}
//       >
//         <div>{message.message}</div>

//         <div
//           style={{
//             fontSize: "10px",
//             marginTop: "5px",
//             textAlign: itsMe ? "right" : "left",
//             opacity: 0.8,
//           }}
//         >
//           {formattedTime}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Message;

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


// import React from "react";

// function Message({ message }) {
//   const authUser = JSON.parse(localStorage.getItem("ChatApp"));
//   const itsMe = message.senderId === authUser.user._id;

//   const chatName = itsMe ? " chat-end" : "chat-start";
//   const chatColor = itsMe ? "bg-blue-500" : "";

//   const createdAt = new Date(message.createdAt);
//   const formattedTime = createdAt.toLocaleTimeString([], {
//     hour: "2-digit",
//     minute: "2-digit",
//   });
//   return (
//     <div>
//       <div className="p-4">
//         <div className={`chat ${chatName}`}>
//           <div className={`chat-bubble text-white ${chatColor}`}>
//             {message.message}
//           </div>
//           <div className="chat-footer">{formattedTime}</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Message;