import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "https://chat-app-3-x205.onrender.com",
    methods: ["GET", "POST"],
  },
});

// realtime message code goes here
export const getReceiverSocketId = (receiverId) => {
  return users[receiverId];
};

const users = {};

// used to listen events on server side.
io.on("connection", (socket) => {
  console.log("a user connected", socket.id);
  const userId = socket.handshake.query.userId;
  if (userId) {
    users[userId] = socket.id;
    console.log("Hello ", users);
  }
  // used to send the events to all connected users
  io.emit("getOnlineUsers", Object.keys(users));

  // used to listen client side events emitted by server side (server & client)
  socket.on("disconnect", () => {
    console.log("a user disconnected", socket.id);
    delete users[userId];
    io.emit("getOnlineUsers", Object.keys(users));
  });
});

export { app, io, server };



// import { Server } from "socket.io";
// import http from "http";
// import express from "express";

// const app = express();
// const server = http.createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3001",
//     methods: ["GET", "POST"],
//   },
// });

// const users = {}; // { userId: [socketId1, socketId2] }

// export const getReceiverSocketId = (receiverId) => {
//   return users[receiverId]?.[0];
// };

// io.on("connection", (socket) => {
//   const userId = socket.handshake.query.userId;

//   if (userId) {
//     if (!users[userId]) users[userId] = [];
//     users[userId].push(socket.id);
//   }

//   io.emit("getOnlineUsers", Object.keys(users));

//   socket.on("disconnect", () => {
//     if (userId && users[userId]) {
//       users[userId] = users[userId].filter((id) => id !== socket.id);

//       if (users[userId].length === 0) {
//         delete users[userId];
//       }
//     }

//     io.emit("getOnlineUsers", Object.keys(users));
//   });
// });

// export { app, io, server };