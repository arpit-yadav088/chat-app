import React from 'react'

const User = () => {
  return (
    <div>
      <div className='flex space-x-4 py-7 hover:bg-slate-600 duration-300 cursor-pointer '>
      <div className="avatar avatar-online">
        <div className="w-12 rounded-full">
         <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
      </div>
    </div>

    <div>
      <h1>Mahadev</h1>
      <span>mahadev12@gmail.com</span>
    </div>
    </div>
    </div>
  )
}

export default User