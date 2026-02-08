// import Message from "../../Frontend/src/home/right/Message.jsx";
import User from "../models/user.model.js";

export const signup =async (req, res) => {
 try {
   const {name, email, password, confirmpassword} = req.body;
  if(pasword !== confirmpassword) {
      return res.status(400).json({ Message: "password already exists"});
    }

    const user = await User.findOne({ email});
    if (user){
      return status(400).json({ Message: "email already exists"});
    }
    const newUser =await new User({
      name,
      email,
      password,
    });
    newUser
    .save().then(() =>
      res.status(201).json({ Message: "user registerd successfully"})
    );
 } catch (error) {
  
 }
};
