
// import React, { useState } from "react";
// import { RiLogoutCircleLine } from "react-icons/ri";
// import axios from "axios";
// import Cookies from "js-cookie";
// import toast from "react-hot-toast";

// const Logout = () => {
//    const [loading, setLoading] = useState(false);
//   const handleLogout = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.post("/api/user/logout");
//       localStorage.removeItem("messenger");
//       Cookies.remove("jwt");
//       setLoading(false);
//       toast.success("Logged out successfully");
//       window.location.reload();
//     } catch (error) {
//       console.log("Error in Logout", error);
//       toast.error("failed to logout");
//     }
//   };
//   return (
//     <div className='w-[4%] bg-gray-600 text-white flex flex-col justify-end'>
//       <div className='p-3 align-bottom'>
//         <button>
//           <RiLogoutCircleLine className='text-4xl p-1 hover:bg-gray-900 rounded-lg duration-300 cursor-pointer'
//            onClick={handleLogout}/>
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Logout;


import React, { useState } from "react";
import { RiLogoutCircleLine } from "react-icons/ri";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const Logout = () => {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);

    try {
      await axios.post("/api/user/logout");

      localStorage.removeItem("messenger");
      Cookies.remove("jwt");

      toast.success("Logged out successfully");
      window.location.reload();
    } catch (error) {
      console.log("Error in Logout", error);
      toast.error("Failed to logout");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-16 md:w-20 bg-[#202C33] border-r border-[#2A3942] flex flex-col justify-end items-center py-6">

      <button
        onClick={handleLogout}
        disabled={loading}
        className="w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 transition-all duration-300 flex items-center justify-center disabled:opacity-50"
      >
        <RiLogoutCircleLine className="text-2xl text-white" />
      </button>

    </div>
  );
};

export default Logout;