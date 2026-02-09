
import User from "../models/user.model.js";
import createTokenAndSaveCookie from "../jwt/generateToken.js"

export const signup =async (req, res) => {
 try {
   const {name, email, password, confirmpassword} = req.body;
  if(password !== confirmpassword) {
      return res.status(400).json({ Message: "Passwords do not match"});
    }

    const user = await User.findOne({ email});
 if (user) {
  return res.status(400).json({ message: "email already exists" });
}

    const newUser =await new User({
      name,
      email,
      password,
    });
    await newUser.save();
    if (newUser){
      createTokenAndSaveCookie(newUser._id,res);
      res.status(201).json({ Message: "user registerd successfully", newUser})
    }
 } catch (error) {
  console.log("Signup Error:", error.message);
  res.status(500).json({
    success: false,
    message: error.message,
  });
 }
};
