
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthProvider";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => useContext(SocketContext);

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);

  const { authUser } = useAuth();

  useEffect(() => {
    if (authUser?._id) {
      const newSocket = io("http://localhost:5002", {
        query: {
          userId: authUser._id,
        },
      });

      setSocket(newSocket);

      // listen online users list
      newSocket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      return () => {
        newSocket.close();
        setSocket(null);
      };
    } else {
      setSocket(null);
      setOnlineUsers([]);
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};

// import { createContext, useContext, useEffect, useState } from "react";
// import { useAuth } from "./AuthProvider";
// import io from "socket.io-client";

// const SocketContext = createContext();

// export const useSocketContext = () => {
//   return useContext(SocketContext);
// };

// export const SocketProvider = ({ children }) => {
//   const [socket, setSocket] = useState(null);
//   const [onlineUsers, setOnlineUsers] = useState([]);
  
//   const { authUser } = useAuth();

//   useEffect(() => {
//     if (authUser) {
//       const socket = io("http://localhost:5002/", {
//         query: {
//           userId: authUser._id,
//         },
//       });

//       setSocket(socket);

//       socket.on("getOnlineUsers, (users) => {
//         setOnlineUsers(users);
//         console.log("Socket Connected")
//       });
//     }
//       }, [authUser]);

//     //   return () => socket.close();
//     // } else {
//     //   if (socket) {
//     //     socket.close();
//     //     setSocket(null);
//     //   }

//   return (
//     <SocketContext.Provider value={{ socket }}>
//       {children}
//     </SocketContext.Provider>
//   );
// };
