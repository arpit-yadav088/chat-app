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

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connected to MongoDB");
    
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
    process.exit(1); 
  }
};

connectDB();