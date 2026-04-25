const mongoose = require('mongoose');

const likeSchema = mongoose.Schema({
     post : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'posts',
        required : [ true, "Post id is required to like a post"]
       
    },
    user : {
        type : String,
        ref : 'user',
        required : [ true, "User id is required to like a post"]
    }  
    
} , {
    timestamps : true
})

// ek user ek post ko sirf ek baar like kar sakta hai , isliye hum unique index bana rahe hein likes aur user ke combination par
likeSchema.index({post : 1 , user : 1} , {unique : true}) // ek user ek post ko sirf ek baar like kar sakta hai

const likeModel = mongoose.model('like' , likeSchema)
module.exports = likeModel