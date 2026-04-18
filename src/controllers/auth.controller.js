
// is File me sare Auth Controllers ka logic jayega

const userModel = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

async function registerController(req,res){

    const {email , username , bio , profilePicture , password} = req.body

    const isUserExist =await userModel.findOne({
        $or : [{email},{username}]
    })
    if (isUserExist) {
        let msg = "User Already Exists Please Login";
    
        if (isUserExist.email === email) {
            msg += " (Email already used)";
        } else {
            msg += " (Username already used)";
        }
    
        return res.json({ msg });
    }

const hash =await bcrypt.hash(password,10)

const user = await userModel.create({
    email , username , bio , profilePicture , password : hash
})
const token = jwt.sign( { userId: user._id },process.env.JWT_SECRET,{ expiresIn: "1d" });

res.cookie ("token",token)

res.status(200).json({
    msg : "User Registered SuccessFully"  ,
     user : { username : user.username , bio : user.bio , email :user.email , profilePicture : user.profilePicture}
})
}

async function loginController(req,res) {
    const {username , email , password} = req.body 

    const user = await userModel.findOne({
        $or : [{email} , {username}]
    })

    if(!user){
        return res.json({
            msg : "user does not exist Please Register First"
        })
    }
  
    const isPassWordvalid = bcrypt.compare(password , user.password)
    if(!isPassWordvalid){
       return res.json({
        msg : "Password Invalid"
       })
    }

    const token = jwt.sign( { userId: user._id },process.env.JWT_SECRET,{ expiresIn: "1d" });
    res.cookie("token" , token)

    res.json({
        msg: "User Logged In",
        user: {
            username: user.username,
            email: user.email,
            bio: user.bio,
            profilePicture: user.profilePicture
        }
    });


   

}

module.exports = {
    registerController , loginController
}