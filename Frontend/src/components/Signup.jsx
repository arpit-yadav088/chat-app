import React from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from '../context/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";

const Signup = () => {
  const { setAuthUser } = useAuth();
  const navigate = useNavigate(); 

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const validatePasswordMatch = (value) => {
    return value === getValues("password") || "Passwords do not match";
  };

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };

    try {
      const response = await axios.post("/api/user/signup", userInfo, {
        withCredentials: true,
      });

      if (response.data) {
        toast.success("Signup successful!");
        
        localStorage.setItem("messenger", JSON.stringify(response.data.user));
        
        setAuthUser(response.data.user);

        navigate("/"); 
      }
    } catch (error) {
      if (error.response) {
        toast.error("Error: " + (error.response.data.error || error.response.data.message));
      } else {
        toast.error("Server is not reachable. Please try again later.");
      }
    }
  };

  return (
    <div className='flex h-screen items-center justify-center bg-gray-100'>
      <form 
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white border border-gray-300 px-8 py-6 rounded-lg shadow-md space-y-4 w-96"
      >
        <h1 className='text-2xl text-blue-600 font-bold text-center'>Messenger</h1>
        <h2 className='text-xl text-center text-gray-700'>
          Create a new <span className='text-blue-600 font-semibold'>Account</span>
        </h2>
        <hr />

        <div className="space-y-1">
          <label className="input input-bordered flex items-center gap-2 border border-gray-400 p-2 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
              <path d="M8 8a3 3 0 1 0-6 3 3 3 0 0 0 6 0ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input 
              type="text" 
              className="grow outline-none" 
              placeholder="Username" 
              {...register("name", { required: "Username is required" })} 
            />
          </label>
          {errors.name && <p className='text-red-500 text-xs italic'>{errors.name.message}</p>}
        </div>

        <div className="space-y-1">
          <label className="input input-bordered flex items-center gap-2 border border-gray-400 p-2 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
              <path d="M2.5 3A1.5 1.5 0 0 1 4 1.5h8A1.5 1.5 0 0 1 13.5 3v.793c.026.009.051.02.076.032L7.674 8.51c.206.146.446.165.598-.318A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V13h14V6.954Z" />
            </svg>
            <input 
              type="email" 
              className="grow outline-none" 
              placeholder="Email" 
              {...register("email", { 
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
              })} 
            />
          </label>
          {errors.email && <p className='text-red-500 text-xs italic'>{errors.email.message}</p>}
        </div>

        <div className="space-y-1">
          <label className="input input-bordered flex items-center gap-2 border border-gray-400 p-2 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
              <path fillRule="evenodd" d="M8 1a4 4 0 0 0-4 4v2H3.5A1.5 1.5 0 0 0 2 8.5v4A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-4A1.5 1.5 0 0 0 12.5 7H12V5a4 4 0 0 0-4-4Zm-3 6V5a3 3 0 1 1 6 0v2H5Z" clipRule="evenodd" />
            </svg>
            <input 
              type="password" 
              className="grow outline-none" 
              placeholder="Password" 
              {...register("password", { 
                required: "Password is required",
                minLength: { value: 6, message: "Minimum 6 characters" }
              })} 
            />
          </label>
          {errors.password && <p className='text-red-500 text-xs italic'>{errors.password.message}</p>}
        </div>

        <div className="space-y-1">
          <label className="input input-bordered flex items-center gap-2 border border-gray-400 p-2 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
              <path fillRule="evenodd" d="M8 1a4 4 0 0 0-4 4v2H3.5A1.5 1.5 0 0 0 2 8.5v4A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-4A1.5 1.5 0 0 0 12.5 7H12V5a4 4 0 0 0-4-4Zm-3 6V5a3 3 0 1 1 6 0v2H5Z" clipRule="evenodd" />
            </svg>
            <input 
              type="password" 
              className="grow outline-none" 
              placeholder="Confirm Password" 
              {...register("confirmPassword", { 
                required: "Please confirm your password", 
                validate: validatePasswordMatch 
              })} 
            />
          </label>
          {errors.confirmPassword && <p className='text-red-500 text-xs italic'>{errors.confirmPassword.message}</p>}
        </div>

        <button 
          type='submit' 
          className='text-white bg-blue-600 hover:bg-blue-700 w-full rounded-lg py-2 font-semibold transition duration-200 cursor-pointer'
        >
          Signup
        </button>

        <p className='text-center text-sm text-gray-600'>
          Already have an account? 
          <Link to="/login" className='text-blue-600 underline ml-1 hover:text-blue-800 transition'>
            Login
          </Link>
        </p> 
      </form>
    </div>
  );
};

export default Signup;