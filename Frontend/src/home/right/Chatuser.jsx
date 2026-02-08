import React from 'react'

const Chatuser = () => {
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
      <h1 className="text-xl">Ankit Pathak</h1>
      <span className='text-xl'>Online</span>
    </div>
  </div>
</>
  )
}

export default Chatuser