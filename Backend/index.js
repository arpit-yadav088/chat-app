// import express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import userRoute from "./route/user.route.js"


// const app = express();
// dotenv.config();

// app.use(express.json());

// const PORT = process.env.PORT || 8000;

// const URI = process.env.MONGODB_URI;

// try {
//   mongoose.connect(URI);
//   console.log("MongoDB Conncted")
// } catch (error) {
//   console.log(error)
// }

// app.use("/user", userRoute);

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`)
// })


// import express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import cors from "cors"
// import userRoute from "./route/user.route.js";
// import cookieParser from "cookie-parser"


// dotenv.config();

// const app = express();
// app.use(express.json());
// app.use(cookieParser());
// // app.use(cors());
// app.use(cors({
//     origin: "http://localhost:5173", // आपके React ऐप का URL
//     credentials: true,              // कुकीज़ भेजने की अनुमति देता है
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"]
// }));

// const PORT = process.env.PORT || 8000;
// const URI = process.env.MONGODB_URI;

// // DB connection
// // const connectDB = async () => {
// //   try {
// //     await mongoose.connect(URI);
// //     console.log("MongoDB Connected");
// //   } catch (error) {
// //     console.log("MongoDB Error:", error.message);
// //   }
// // };

// // connectDB();

// const connectDB = async () => {
//   try {
//     await mongoose.connect(URI);
//     console.log("Connected to MongoDB");
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// connectDB();

// // routes
// app.use("/user", userRoute);

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userRoute from "./route/user.route.js";
import messageRoute from "./route/message.route.js";
import cookieParser from "cookie-parser";
import path from "path";
import { app, server } from "./SocketIO/server.js";
dotenv.config();

// const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173", 
    credentials: true,              
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

const PORT = process.env.PORT || 8000;
const URI = process.env.MONGODB_URI;

// Routes (इसे listen से पहले रखना बेहतर है)
app.use("/api/user", userRoute);
app.use("/api/message", messageRoute);


// -------code for deployment---------


if (process.env.NODE_ENV === "production") {
  const dirPath = path.resolve();

  app.use(express.static(path.join(dirPath, "Frontend", "dist")));

  app.use((req, res) => {
    res.sendFile(path.join(dirPath, "Frontend", "dist", "index.html"));
  });
}

// DB connection & Server Start
const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("✅ Connected to MongoDB");
    
    // अब सर्वर यहाँ सिर्फ एक बार शुरू होगा
    server.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    process.exit(1); // अगर DB कनेक्ट नहीं हुआ तो ऐप बंद कर दें
  }
};

connectDB();

// ❌ नीचे वाला app.listen() यहाँ से हटा दिया गया है




// server.listen(PORT, () => {
//   console.log("Server running");
// });

// mongoose.connect(URI)
// .then(() => console.log("MongoDB Connected"))
// .catch(err => console.log(err));

// Replace this:
// mongoose.connect(URI)
// .then(() => {
//  server.listen(PORT)
// })

// Also Check Port

// Use:

// const PORT = process.env.PORT || 10000;


// Render needs this
// server.listen(PORT, "0.0.0.0")