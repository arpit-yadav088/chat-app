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


import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./route/user.route.js";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8000;
const URI = process.env.MONGODB_URI;

// DB connection
const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("MongoDB Error:", error.message);
  }
};

connectDB();

// routes
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

