import React from 'react'
import Chatuser from './Chatuser'
import Messages from './Messages'
import Type from './Type'

const Right = () => {
  return (
    <div className='w-[70%] bg-gray-900 text-white flex flex-col h-screen'>
      <Chatuser></Chatuser>

      {/* Messages area */}
      <div 
      className='flex-1 py-2 flex-ankit overflow-y-auto px-2' style={{maxHeight: "calc(90vh - 8vh)" }}>
        <Messages></Messages>
      </div>

      {/* Input box */}
      <Type></Type>
    </div>
  )
}

export default Right