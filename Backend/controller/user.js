require('dotenv').config();
const User = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


/****** USER REGISTRATION ******/ 

exports.userRegistration = async (req, res) => {
    try {
      
      const { name,  email, password } = req.body;
  
      if (!(email && password && name )) {
        res.status(400).send("All input is required");
      }
  
      
      const oldUser = await User.findOne({ email });
  
      if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
      }
  
      
      encryptedPassword = await bcrypt.hash(password, 10);
  
      
      const user = await User.create({
        name,
        email: email.toLowerCase(), 
        password: encryptedPassword,
      });
  
      
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      
      user.token = token;
  
      
      res.status(201).json({success:true, message:"User created successfully", userInfo:user});
    } catch (err) {
      res.status(500).json({success: false, error:err})
      console.log(err);
    }
  }

  /****** USER SIGNIN *******/
  exports.userSignIn = async (req, res) => {
    try {
      
      const { email, password } = req.body;
  
      
      if (!(email && password)) {
        res.status(400).send("All input is required");
      }
      
      const user = await User.findOne({ email });
  
      if (user && (await bcrypt.compare(password, user.password))) {
        
        const token = jwt.sign(
          { user_id: user._id, email },
          process.env.TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );
  
        
        user.token = token;
  
        
        res.status(200).json({success:true, message:"User details", userInfo:user});
      } else {
        res.status(400).json({ message: "Invalid Credentials" });
      }
    } catch (err) {
        res.status(500).json({success: false, error:err})
      console.log(err);
    }
  }