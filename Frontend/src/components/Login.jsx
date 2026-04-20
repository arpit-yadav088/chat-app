import React from 'react'
import { useForm } from "react-hook-form"
import axios from "axios" 
import { useAuth } from '../context/AuthProvider'
import { Link } from 'react-router-dom'
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const Login = () => {
  const {authUser, setAuthUser} = useAuth();
      const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

//     const onSubmit = (data) => {
//       const userInfo = {
//         email: data.email,
//         password: data.password,
//       }
//       // axios.post("http://localhost:5002/user/login", userInfo).then((response) => {
//       //   console.log(response.data);

//       axios.post("http://localhost:5002/user/login", userInfo, {
//   withCredentials: true, // ✅ IMPORTANT
// });
        
//         if (response.data) {
//           alert("login successful. ");
//         }

//           // ✅ TOKEN SAVE (IMPORTANT)
//          Cookies.set("jwt", response.data.token);
  
//         localStorage.setItem("messenger", JSON.stringify(response.data.user));
//         setAuthUser(response.data.user);
//       })
//       .catch((error) => {
//         if (error.response) {
//           alert("error:" + error.response.data.message);
//         }
//       });
//     };

// const onSubmit = (data) => {
//   const userInfo = {
//     email: data.email,
//     password: data.password,
//   };

//   axios
//     .post("http://localhost:5002/user/login", userInfo, {
//       withCredentials: true, // ✅ Good: Needed for cross-site cookies
//     })
//     .then((response) => {
//       // Logic must stay INSIDE the .then block
//       if (response.data) {
//         alert("Login successful.");
        
//         // ✅ Save Token to Cookies
//         // Note: If your backend uses 'Set-Cookie' header with httpOnly, 
//         // you might not need to set it manually here.
//         Cookies.set("jwt", response.data.token);

//         // Save to LocalStorage and Update Context
//         localStorage.setItem("messenger", JSON.stringify(response.data.user));
//         setAuthUser(response.data.user);
//       }
//     })
//     .catch((error) => {
//       if (error.response) {
//         alert("Error: " + (error.response.data.message || "Login failed"));
//       } else {
//         alert("Server is unreachable");
//       }
//     });
// };


const onSubmit = (data) => {
  const userInfo = {
    email: data.email,
    password: data.password,
  };

  axios
    .post("/api/user/login", userInfo, {
      withCredentials: true,
    })
    .then((response) => {
      // 2. यहाँ डेटा प्रिंट होना चाहिए
      console.log("Server Response:", response.data); 

      if (response.data) {
        alert("Login successful.");
        
        // LocalStorage और Context अपडेट करें
        localStorage.setItem("messenger", JSON.stringify(response.data.user));
        setAuthUser(response.data.user);
        
        // डेटा आने के बाद का कन्फर्मेशन
        console.log("AuthUser set successfully!");
      }
    })
    .catch((error) => {
      // 3. अगर कोई एरर है तो यहाँ दिखेगा
      console.error("Login Error Details:", error.response ? error.response.data : error.message);
      alert("Error: " + (error.response?.data?.message || "Login failed"));
    });
};

  return (
    <>
      <div>
        <div>
    <div className='flex h-screen items-center justify-center'>
      <form 
       onSubmit={handleSubmit(onSubmit)}
       className="border border-black px-6 py-3 rounded-md space-y-3 w-92">
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
           <input type="password" 
           className="grow" 
           placeholder="password" 
           {...register("password", { required: true })}
           />
         </label>
         {errors.password && <span className='text-red-500 text-sm'>**This field is required</span>}

         {/* text & button */}

         <div className='flex justify-between'>
         <input type='submit' value="login" className='text-white bg-blue-500 w-full rounded-lg py-2 cursor-pointer' ></input>
         </div>
         <p>Don't have any Account? 
          <Link to={"/signup"} className='text-blue-500 underline cursor-pointer ml-1'>Signup
            </Link></p>   
      </form>
    </div>
    </div>
      </div>
    </>
  )
}

export default Login