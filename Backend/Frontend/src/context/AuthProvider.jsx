import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(() => {
    const user = localStorage.getItem("messenger");
    return user ? JSON.parse(user) : null;
  });

  useEffect(() => {
    if (authUser) {
      localStorage.setItem(
        "messenger",
        JSON.stringify(authUser)
      );
    } else {
      localStorage.removeItem("messenger");
    }
  }, [authUser]);

  return (
    <AuthContext.Provider
      value={{ authUser, setAuthUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);