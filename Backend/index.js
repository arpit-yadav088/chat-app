// import express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import cors from "cors";
// import userRoute from "./route/user.route.js";
// import messageRoute from "./route/message.route.js";
// import cookieParser from "cookie-parser";
// import path from "path"
// import { fileURLToPath } from "url";
// import { app, server } from "./SocketIO/server.js";
// dotenv.config();

// // const app = express();

// // Middleware
// app.use(express.json());
// app.use(cookieParser());
// app.use(cors({
//     origin: "http://localhost:5173", 
//     credentials: true,              
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"]
// }));

// const PORT = process.env.PORT || 8000;
// const URI = process.env.MONGODB_URI;

// // Routes (इसे listen से पहले रखना बेहतर है)
// app.use("/api/user", userRoute);
// app.use("/api/message", messageRoute);

// //------CODE FOR DEPLOYMENT

// if (process.env.NODE_ENV === "production") {
//   const dirPath = path.resolve();
//   app.use(express.static("/Frontend/dist"));
//   app.get('/{*any}', (req, res) => {
//   res.sendFile(path.join(__dirname, 'Frontend', 'dist', 'index.html'));
// });
// }

// // DB connection & Server Start
// const connectDB = async () => {
//   try {
//     await mongoose.connect(URI);
//     console.log("✅ Connected to MongoDB");
    
//     // अब सर्वर यहाँ सिर्फ एक बार शुरू होगा
//     server.listen(PORT, () => {
//       console.log(`🚀 Server is running on port ${PORT}`);
//     });
//   } catch (error) {
//     console.error("❌ MongoDB Connection Error:", error.message);
//     process.exit(1); // 
//   }
// };

// connectDB();


import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

import userRoute from "./route/user.route.js";
import messageRoute from "./route/message.route.js";
import { app, server } from "./SocketIO/server.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 8000;
const URI = process.env.MONGODB_URI;

// Middleware
app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: true,
  credentials: true
}));

// API Routes
app.use("/api/user", userRoute);
app.use("/api/message", messageRoute);

// Production frontend serve
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../Frontend/dist")));

  app.get('/{*any}', (req, res) => {
    res.sendFile(path.join(__dirname, "../Frontend/dist/index.html"));
  });
}

// DB connect
mongoose.connect(URI)
.then(() => {
  console.log("MongoDB Connected");

  server.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  });

})
.catch((err) => console.log(err));



