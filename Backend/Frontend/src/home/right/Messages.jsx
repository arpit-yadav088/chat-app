// import React from 'react'
// import Message from './Message';
// import useGetMessage from '../../context/useGetMessage';
// import Loading from "../../components/Loading.jsx";

// const Messages = () => {
//   const { loading, messages } = useGetMessage();
//   console.log(messages);
//   return (
//   <>
//   {loading?(<Loading></Loading>):(messages.length>0 && messages.map((message) => {
//    <Message key={message._id} message={message} />
//   }))}


//    <div className='' style={{minHeight: "calc(88vh-8vh)"}}>
//     {!loading && messages.length === 0 && <div><p className='text-center font-bold mt-[20%]'>say hi</p></div>}
//     {/* <Message /> */}
//    </div>
//   </>
//   )
// }

// export default Messages;


// import React, { useEffect, useRef } from "react";
// import Message from './Message';
// import useGetMessage from '../../context/useGetMessage';
// import Loading from "../../components/Loading.jsx";
// import useGetSocketMessage from "../../context/useGetSocketMessage.js";

// const Messages = () => {
//   const { loading, messages } = useGetMessage();
//    useGetSocketMessage();

//   console.log(messages);

//     const lastMsgRef = useRef();
//   useEffect(() => {
//     setTimeout(() => {
//       if (lastMsgRef.current) {
//         lastMsgRef.current.scrollIntoView({
//           behavior: "smooth",
//         });
//       }
//     }, 100);
//   }, [messages]);

//   return (
//     <div>
//       {loading ? (
//         <Loading />
//       ) : (
//         messages.length > 0 &&
//         messages.map((message) => (
//           <div key={message._id} ref={lastMsgRef}>
//             <Message message={message} />
//           </div>
//         ))
//       )}

//       {!loading && messages.length === 0 && (
//         <div>
//           <p className="text-center mt-[20%]">
//             Say! Hi to start the conversation
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Messages;


import React, { useEffect, useRef } from "react";
import Message from './Message';
import useGetMessage from '../../context/useGetMessage';
import Loading from "../../components/Loading.jsx";
import useGetSocketMessage from "../../context/useGetSocketMessage.js";

const Messages = () => {
  const { loading, messages } = useGetMessage();
  useGetSocketMessage();

  const lastMsgRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      if (lastMsgRef.current) {
        lastMsgRef.current.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 100);
  }, [messages]);

  return (
    <div className="w-full">
      {loading ? (
        <Loading />
      ) : (
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMsgRef} className="w-full">
            <Message message={message} />
          </div>
        ))
      )}

      {!loading && messages.length === 0 && (
        <div>
          <p className="text-center mt-[20%]">
            Say! Hi to start the conversation
          </p>
        </div>
      )}
    </div>
  );
}

export default Messages;