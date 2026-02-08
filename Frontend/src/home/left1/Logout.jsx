import React from 'react'
import { RiLogoutCircleLine } from "react-icons/ri";

const Logout = () => {
  return (
    <div className='w-[4%] bg-gray-600 text-white flex flex-col justify-end'>
      <div className='p-3 align-bottom'>
        <button>
          <RiLogoutCircleLine className='text-4xl p-1 hover:bg-gray-900 rounded-lg duration-300 cursor-pointer'/>
        </button>
      </div>
    </div>
  )
}

export default Logout;