
import React, { useState } from "react";
import { RiLogoutCircleLine } from "react-icons/ri";
import axios from "axios";
import Cookies from "js-cookie";
// import toast from "react-hot-toast";

const Logout = () => {
   const [loading, setLoading] = useState(false);
  const handleLogout = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/user/logout");
      localStorage.removeItem("messenger");
      Cookies.remove("jwt");
      setLoading(false);
      alert("Logged out successfully");
      window.location.reload();
    } catch (error) {
      console.log("Error in Logout", error);
    }
  };
  return (
    <div className='w-[4%] bg-gray-600 text-white flex flex-col justify-end'>
      <div className='p-3 align-bottom'>
        <button>
          <RiLogoutCircleLine className='text-4xl p-1 hover:bg-gray-900 rounded-lg duration-300 cursor-pointer'
           onClick={handleLogout}/>
        </button>
      </div>
    </div>
  )
}

export default Logout;