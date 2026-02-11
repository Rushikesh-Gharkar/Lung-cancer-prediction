const bcrypt = require('bcrypt')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const registerUser = async (req , res)=>{
    try{
        console.log("REGISTER DATA:", req.body);
        const {firstname , lastname , age,email , password} = req.body

        const existingUser = await User.findOne({email : email})

        if(existingUser){
            return res.status(400).json({
                success : false,
                message : "User already exists"
            })
        }

        const hashedPassword = await bcrypt.hash(password , 10)

        await User.create({
            firstname : firstname,
            lastname : lastname,
            age : age,
            email : email,
            password : hashedPassword
        })

       return res.status(201).json({
            success:true,
            message : "User signup successful",
            data : req.body,
        })
        
    }
    catch(err){
        console.error("REGISTER ERROR:", err);
       return res.status(500).json({
        success : false,
        message : "Server error"
       })
    }
}

const userLogin = async (req , res)=>{
    try{
        const {email , password} = req.body;
        
        const user = await User.findOne({email})

        if(!user) {
            return res.status(409).json({
                success:false,
                message : "Incorrect credentials"
            })
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res.status(401).json({
            success: false,
            message: "Invalid credentials"
          });
        }

        const token = jwt.sign(
            {userId : user._id},
            process.env.JWT_SECRET,
            {expiresIn : "7d"}
        )

        return res.status(500).json({
            success : true,
            message : "Login successful"
        })

    }catch(err){
        return res.status(500).json({
            success : false,
            message : "Server error"
           })
    }
}

module.exports = {registerUser , userLogin}