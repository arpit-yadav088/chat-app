import React from 'react'
import useConversation from '../../statemanage/useConversation'

const Chatuser = () => {
  const { selectedConversation } = useConversation();
  console.log(selectedConversation)


  if (!selectedConversation) {
    return (
      <div className="h-[10vh] px-5 flex items-center bg-gray-800">
        <h1 className="text-xl text-white">Select a user to chat</h1>
      </div>
    );
  }
  return (
  <>
  {/* <div className='h-[14vh] pl-5 pt-3 flex space-x-4 bg-gray-800 hover:bg-gray-600 duration-300'> */}
  <div className="h-[10vh] px-5 flex items-center space-x-4 bg-gray-800 hover:bg-gray-700 duration-300">
     {/* Avatar */}
    <div>
      <div className="avatar online">
        <div className="w-12 rounded-full">
         <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" 
         alt="user"/>
        </div>
      </div>
    </div>

    {/* User Info */}
    <div>
      <h1 className="text-xl">{selectedConversation.name}</h1>
      <span className='text-xl'>Online</span>
    </div>
  </div>
</>
  )
}

export default Chatuser