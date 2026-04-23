// import React from 'react'
// import Left from './home/left/Left'
// import Right from './home/right/Right'
// import Logout from './home/left1/Logout'
// import Signup from './components/Signup'
// import Login from './components/Login'
// import { useAuth } from './context/AuthProvider'
// import { Route, Routes } from "react-router-dom";


// const App = () => {
//   const { authUser, setAuthUser } = useAuth();
//   console.log(authUser);
//   return (
//     <>
//     <Routes>
//       <Route path="/" element={authUser ? (<div>
//         <Logout></Logout>
//         <Left></Left>
//         <Right></Right>
//       </div>
//       ) : (
//         <Login></Login>
//       )
//     } 
//     />
//       <Route
//           path="/login"
//           element={<Login />}
//         />
//         <Route
//           path="/signup"
//           element={<Signup />}
//         />
//     </Routes>   
//     </>
//   )
// }

// export default App


// import React from 'react'
// import Left from './home/left/Left'
// import Right from './home/right/Right'
// import Logout from './home/left1/Logout'
// import Signup from './components/Signup'
// import Login from './components/Login'
// import { useAuth } from './context/AuthProvider'

// const App = () => {
//   const { authUser, setAuthUser } = useAuth();
//   console.log(authUser);
//   return (
//     <>
//     {/* <div className='flex h-screen'>
//       <Logout></Logout>
//       <Left></Left>
//       <Right></Right>
//     </div> */}

//     <Signup></Signup>
//     {/* <Login></Login> */}
//     </>
//   )
// }

// export default App


import React from "react";
// import Left from "./home/Leftpart/Left";
// import Right from "./home/Rightpart/Right";
import Left from './home/left/Left'
import Right from './home/right/Right'
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useAuth } from "./context/AuthProvider";
// import Logout from "./home/left1/Logout";
 import Logout from './home/left1/Logout'
 import { Toaster } from "react-hot-toast";

import { Navigate, Route, Routes } from "react-router-dom";
// import Loading from "./components/Loading";
function App() {
  const {authUser, setAuthUser} = useAuth();
  console.log(authUser);
  return (
    <>
    {/* <Loading></Loading> */}
      <Routes>
        <Route
          path="/"
          element={
            authUser ? (
              <div className="flex h-screen">
                <Logout />
                <Left />
                <Right />

              </div>


            
            ) : (
              <Navigate to={"/login"} />
            )
          }
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <Signup />}
        />
      </Routes>
    </>
  );
}

export default App;