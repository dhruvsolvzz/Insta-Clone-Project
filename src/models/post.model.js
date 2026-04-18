const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    caption : {
        type : String ,
        required : [true , "Enter the Post Caption"]
    } ,
    imgUrl : {
        type : String ,
        required : [true , "Enter the Post imgUrl for creating the post"]
    } ,
    user : {
        ref :"users" ,
        type : mongoose.Schema.Types.ObjectId ,
        required : [true , "User id is Required to create a Post"]
    }
})

const postModel = mongoose.model('post' , postSchema)
module.exports = postModel