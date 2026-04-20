// import React, { createContext, useContext, useState } from 'react'
// import Cookies from "js-cookie"
// const  AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const initialUserState = Cookies.get("jwt") || localStorage.getItem("messenger");

//     //parse the user data and storing in state
//     const [authUser, setAuthUser] = useState(
//       initialUserState ? JSON.parse(initialUserState) : undefined 
//     );
//   return (
//     <AuthContext.Provider value={[ authUser, setAuthUser]}>
//     {children}
//     </AuthContext.Provider>
//   )
// }

// export const useAuth = () => useContext(AuthContext);

// import React, { createContext, useContext, useState } from "react";
// import Cookies from "js-cookie";
// export const AuthContext = createContext();
// export const AuthProvider = ({ children }) => {
//   const initialUserState =
//     Cookies.get("jwt") || localStorage.getItem("ChatApp");

//   // parse the user data and storing in state.
//   const [authUser, setAuthUser] = useState(
//     initialUserState ? JSON.parse(initialUserState) : undefined
//   );
//   return (
//     <AuthContext.Provider value={{authUser, setAuthUser}}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);



import React, { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // हम सिर्फ LocalStorage से यूजर का डेटा उठाएंगे क्योंकि कुकी (JWT) सिर्फ ऑथेंटिकेशन के लिए है
  const initialUserState = localStorage.getItem("messenger"); // आपकी की (key) 'messenger' है

  const [authUser, setAuthUser] = useState(
    initialUserState ? JSON.parse(initialUserState) : undefined
  );

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
