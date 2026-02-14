// import React from 'react'
// import { useForm } from "react-hook-form"

// const Signup = () => {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm()

//   const password = watch("password", "")

//   const validatePasswordMatch = (value) => {
//     return value === password || "Password and Confirm Password don't match"
//   }

//   const onSubmit = (data) => console.log(data)

//   return (
//     <>
//       <div className='flex h-screen items-center justify-center'>
//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           className="border border-black px-6 py-3 rounded-md space-y-3 w-92"
//         >
//           <h1 className='text-xl text-blue-500 font-bold'>Messenger</h1>

//           <h1 className='text-2xl'>
//             Create a new <span className='text-blue-600 font-semibold'>Account</span>
//           </h1>

//           <hr />

//           {/* Username */}
//           <label className="h-7 input input-bordered flex items-center gap-2 border border-black">
//             <input
//               type="text"
//               className="grow"
//               placeholder="Username"
//               {...register("name", { required: true })}
//             />
//           </label>
//           {errors.name && (
//             <span className='text-red-500 text-sm'>**This field is required</span>
//           )}

//           {/* Email */}
//           <label className="h-7 input input-bordered flex items-center gap-2 border border-black">
//             <input
//               type="text"
//               className="grow"
//               placeholder="Email"
//               {...register("email", { required: true })}
//             />
//           </label>
//           {errors.email && (
//             <span className='text-red-500 text-sm'>**This field is required</span>
//           )}

//           {/* Password */}
//           <label className="h-7 input input-bordered flex items-center gap-2 border border-black">
//             <input
//               type="password"
//               className="grow"
//               placeholder="Password"
//               {...register("password", { required: true })}
//             />
//           </label>
//           {errors.password && (
//             <span className='text-red-500 text-sm'>**This field is required</span>
//           )}

//           {/* Confirm Password */}
//           <label className="h-7 input input-bordered flex items-center gap-2 border border-black">
//             <input
//               type="password"
//               className="grow"
//               placeholder="Confirm Password"
//               {...register("confirmPassword", {
//                 required: true,
//                 validate: validatePasswordMatch,
//               })}
//             />
//           </label>

//           {errors.confirmPassword && (
//             <span className='text-red-500 text-sm'>
//               {errors.confirmPassword.message}
//             </span>
//           )}

//           {/* Submit */}
//           <input
//             type="submit"
//             value="Signup"
//             className='text-white bg-blue-500 w-full rounded-lg py-2 cursor-pointer'
//           />

//           <p>
//             You have any Account?
//             <span className='text-blue-500 underline cursor-pointer ml-1'>
//               Login
//             </span>
//           </p>
//         </form>
//       </div>
//     </>
//   )
// }

// export default Signup




import React from 'react'
import { useForm } from "react-hook-form"
import axios from "axios" 
import { useAuth } from '../context/AuthProvider'

export const Signup = () => {
  const {authUser, setAuthUser} = useAuth();
    const {
      register,
      handleSubmit,
      getValues,
      formState: { errors },
  } = useForm();
    // const password = watch("password", "");
    // const confirmPassword = watch("confirmPassword","");
    const validatePasswordMatch = (value) => {
  return value === getValues("password") || "Password don't match";
};

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    }
    await axios.post("http://localhost:5002/user/signup", userInfo).then((response) => {
      console.log(response.data);
      if (response.data) {
        alert("Signup successful! You con log in. ");
      }

      localStorage.setItem("messenger", JSON.stringify (response.data.user));
      setAuthUser(response.data);
    })
    .catch((error) => {
      if (error.response) {
        alert("error:" + error.response.data.error);
      }
    });
  };

  return (
    <>
    <div>
    <div className='flex h-screen items-center justify-center'>
      <form onSubmit={handleSubmit(onSubmit)}
        className="border border-black px-6 py-3 rounded-md space-y-3 w-92">
       <h1 className='text-xl items-center text-blue-500 font-bold '>
        Messenger
       </h1>
        <h1 className='text-2xl items-center'>Create a new 
          <span className='text-blue-600 font-semibold'>Account</span>
        </h1>
        <hr />
        <br></br>

          {/* username */}
         <label className="h-7 input input-bordered flex items-center gap-2 border border-black">
          <svg
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 16 16"
           fill="currentColor"
           className="h-4 w-4 opacity-70"
          >
           <path d="M8 8a3 3 0 1 0-6 3 3 3 0 0 0 6 0ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input type="text" className="grow" placeholder="Username" {...register("name", { required: true })} />
         </label>
         {errors.name && <span className='text-red-500 text-sm'>**This field is required</span>}
        
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
            <input type="text" className="grow" placeholder="Email" 
            {...register("email", { required: true })} />
         </label>
         {errors.email && <span className='text-red-500 text-sm'>**This field is required</span>}

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
           <input type="password" className="grow" placeholder="password" 
           {...register("password", { required: true })}/>
         </label>
         {errors.password && <span className='text-red-500 text-sm'>**This field is required</span>}

          {/* confirm password */}
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
           <input 
           type="password" 
           className="grow" 
           placeholder="confirmpassword" 
           {...register("confirmPassword", { 
             required: "This field is required", 
             validate: validatePasswordMatch,
            })}
            />
         </label>
         {errors.confirmPassword && (
          <span className='text-red-500 text-sm'>
          {errors.confirmPassword.message}
          </span>
        )}

         {/* text & button */}

         <div className='flex justify-between'>
         <input 
         type='submit' 
         value="signup" 
         className='text-white bg-blue-500 w-full rounded-lg py-2 cursor-pointer' >
         </input>
         </div>
         <p>You have any Account? <span className='text-blue-500 underline cursor-pointer ml-1'>Login
            </span></p>   
      </form>
    </div>
    </div>
    </>
  )
}

export default Signup