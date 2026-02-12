import React from 'react'

const Login = () => {
  return (
    <>
      <div>
        <div>
    <div className='flex h-screen items-center justify-center'>
      <form action="" className="border border-black px-6 py-3 rounded-md space-y-3 w-92">
       <h1 className='text-xl items-center text-blue-500 font-bold '>
        Messenger
       </h1>
        <h1 className='text-2xl items-center'>Login with your account{" "}
          <span className='text-blue-600 font-semibold'>Account</span>
        </h1>
        <hr />
        <br></br>

        
          {/* Email */}
          <label className="h-7 input input-bordered flex items-center gap-2 border border-black">
            <svg
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 16 16"
             fill="currentColor"
             className="h-4 w-4 opacity-70"
            >
             <path d="M2.5 3A1.5 1.5 0 0 1 4 1.5h8A1.5 1.5 0 0 1 13.5 3v.793c.026.009.051.02.076.032L7.674 8.51c.206.146.446.165.598-.318A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
             <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V13h14V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
         </label>

         {/* password */}
         <label className="h-7 input input-bordered flex items-center gap-2 border border-black">
          <svg
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 16 16"
             fill="currentColor"
             className="h-4 w-4 opacity-70"
            >
             <path
              fillRule="evenodd"
              d="M8 1a4 4 0 0 0-4 4v2H3.5A1.5 1.5 0 0 0 2 8.5v4A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-4A1.5 1.5 0 0 0 12.5 7H12V5a4 4 0 0 0-4-4Zm-3 6V5a3 3 0 1 1 6 0v2H5Z"
              clipRule="evenodd"
             />
          </svg>
           <input type="password" className="grow" placeholder="password" />
         </label>

         {/* text & button */}

         <div className='flex justify-between'>
         <input type='submit' value="login" className='text-white bg-blue-500 w-full rounded-lg py-2 cursor-pointer' ></input>
         </div>
         <p>Don't have any Account? <span className='text-blue-500 underline cursor-pointer ml-1'>Signup
            </span></p>   
      </form>
    </div>
    </div>
      </div>
    </>
  )
}

export default Login