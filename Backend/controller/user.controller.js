// import bcrypt from "bcryptjs";
// import User from "../models/user.model.js";
// import createTokenAndSaveCookie from "../jwt/generateToken.js"


// export const signup =async (req, res) => {
//  try {
//    const {name, email, password, confirmPassword} = req.body;
//     if(password !== confirmPassword) {
//       return res.status(400).json({ message: "Passwords do not match"});
//     }

//     const user = await User.findOne({ email});
//     if (user) {
//      return res.status(400).json({ message: "email already exists" });
// }
//      //hasedPassword
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser =await new User({
//       name,
//       email,
//       password: hashedPassword,
//     });
//     await newUser.save();
//     if (newUser){
//       createTokenAndSaveCookie(newUser._id,res);
//       res.status(201).json({ 
//         Message: "user registerd successfully", user: {
//         _id: newUser._id,
//         name: newUser.name,
//         email: newUser.email,
//       },
//     })
//     }
//  } catch (error) {
//   console.log("Signup Error:", error.message);
//   res.status(500).json({
//     success: false,
//     message: error.message,
//   });
//  }
// };

// export const login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//      if (!email || !password) {
//       return res.status(400).json({ message: "All fields are required" });
//     }
//     const user = await User.findOne({ email });

//      // user check first
//    if (!user) {
//       return res.status(401).json({ message: "Invalid email or password" });
//     }

//     // password match
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: "Invalid email or password" });
//     }

//        // token
//     createTokenAndSaveCookie(user._id, res);

//     // response
//     res.status(200).json({
//       message: "user logged in successfully",
//       user: {
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//       },
//     });

//   } catch (error) {
//      console.log("Login Error:", error.message);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// export const logout = async(req, res) => {
//    try {
//     res.clearCookie("jwt")
//     res.status(200).json({message: "User logged out successfully"});
//    } catch (error) {
//     console.log(error);
//     res.status(500).json({message: "server error"});
//    }
// }

// export const getUserProfile = async (req, res) => {
//   try {
//     const loggedInUser = req.User._id;
//     const filiteredUsers = await User.find({
//       _id: { $ne: loggedInUser },
//     }).select("-password");
//     res.status(201).json({ filiteredUsers });
//   } catch (error) {
//     console.log("Error in allUsers Controller: " + error);
//     res.status(500).json({ message: "server error"});
//   }
// };

// // export const login = async (req, res) => {
// //   try {
// //     const { email, password } = req.body;

// //     const user = await User.findOne({ email });
// //     if (!user) {
// //       return res.status(401).json({ message: "Invalid email or password" });
// //     }

// //     const isMatch = await bcrypt.compare(password, user.password);
// //     if (!isMatch) {
// //       return res.status(401).json({ message: "Invalid email or password" });
// //     }

// //     createTokenAndSaveCookie(user._id, res);

// //     res.status(200).json({
// //       message: "User logged in successfully",
// //       user: {
// //         _id: user._id,
// //         name: user.name,
// //         email: user.email,
// //       },
// //     });

// //   } catch (error) {
// //     console.log("Login Error:", error.message);
// //     res.status(500).json({ message: "Server error" });
// //   }
// // };

import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import createTokenAndSaveCookie from "../jwt/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    
    // 1. पासवर्ड मैच चेक
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // 2. यूजर अस्तित्व चेक
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // 3. पासवर्ड हैशिंग
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    if (newUser) {
      createTokenAndSaveCookie(newUser._id, res);
      res.status(201).json({
        message: "User registered successfully", // ✅ Small 'm'
        user: {
          _id: newUser._id,
          name: newUser.name,
          email: newUser.email,
        },
      });
    }
  } catch (error) {
    console.log("Signup Error:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Token & Cookie
    createTokenAndSaveCookie(user._id, res);

    res.status(200).json({
      message: "User logged in successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log("Login Error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("jwt");
    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    console.log("Logout Error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

export const getUserProfile = async (req, res) => {
  try {
    const loggedInUser = req.user._id; // ✅ 'req.User' को 'req.user' चेक करें (Auth Middleware के हिसाब से)
    
    // खुद को छोड़कर बाकी यूजर्स को ढूँढना
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUser },
    }).select("-password");
    
    res.status(200).json({ filteredUsers });
  } catch (error) {
    console.log("Error in getUserProfile: " + error.message);
    res.status(500).json({ message: "Server error" });
  }
};
