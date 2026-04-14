const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username : {type:String , unique:[true , "Username Already Exist"] , required:[true , "Username Required"]} ,
    email : {type:String , unique:[true , "Email Already Exist"] , required:[true , "Email Required"]} ,
    password :{type :String , required:[true , "Password is Required"]} ,
    bio:String ,
    profilePicture:{type:String ,default: "https://ik.imagekit.io/fkj3hgyan/default-avatar-icon-of-social-media-user-vector.jpg?updatedAt=1772902202530" }

})



//"users ek space hai jahan data store hota hai"
//"userSchema ek blueprint hai"
//"mongoose.model se userModel banta hai"
const userModel = mongoose.model("users",userSchema)
module.exports = userModel