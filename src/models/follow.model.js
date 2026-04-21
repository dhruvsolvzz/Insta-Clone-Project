const mongoose =require('mongoose');
const followSchema = new mongoose.Schema({
  
    
    follower :{ type: mongoose.Schema.Types.ObjectId, ref: 'User' , required : true},
    following :{ type: mongoose.Schema.Types.ObjectId, ref: 'User' , required : true},
} , {
    timestamps : true 
})


const followModel = mongoose.model("Follow", followSchema)
module.exports = followModel


// edge Collection bote hein ise , ye batata hai kisi bhi do connected user ke beech me kya relation hai ,
//  kya wo ek dusre ko follow kar rahe hein ya nahi , ye dono user ke id ko store karega