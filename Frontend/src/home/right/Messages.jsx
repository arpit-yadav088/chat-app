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


import React, { useEffect, useRef } from "react";
import Message from './Message';
import useGetMessage from '../../context/useGetMessage';
import Loading from "../../components/Loading.jsx";

const Messages = () => {
  const { loading, messages } = useGetMessage();

  console.log(messages);

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
    <>
      {loading ? (
        <Loading />
      ) : (
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMsgRef}>
            <Message message={message} />
          </div>
        ))
      )}

      <div style={{ minHeight: "calc(88vh - 8vh)" }}>
        {!loading && messages.length === 0 && (
          <div>
            <p className='text-center font-bold mt-[20%]'>Say Hi</p>
          </div>
        )}
      </div>
    </>
  )
}

export default Messages;