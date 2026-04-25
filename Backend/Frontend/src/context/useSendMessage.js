import React, { useState } from "react";
import useConversation from "../statemanage/useConversation.js";
import axios from "axios";
const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  const sendMessages = async (message) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `/api/message/send/${selectedConversation._id}`,
        { message }
      );
      setMessages([...messages, res.data.newMessage]);
      setLoading(false);
    } catch (error) {
      console.log("Error in send messages", error);
      setLoading(false);
    }
  };
  return { loading, sendMessages };
};

export default useSendMessage;


// import { useState } from "react";
// import useConversation from "../statemanage/useConversation.js";
// import axios from "axios";

// const useSendMessage = () => {
//   const [loading, setLoading] = useState(false);

//   const { setMessages, selectedConversation } = useConversation();

//   const sendMessages = async (message) => {
//     setLoading(true);

//     try {
//       const res = await axios.post(
//         `/api/message/send/${selectedConversation._id}`,
//         { message }
//       );

//       setMessages((prev) => [...prev, res.data.newMessage]);
//     } catch (error) {
//       console.log("Error in send messages", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { loading, sendMessages };
// };

// export default useSendMessage;