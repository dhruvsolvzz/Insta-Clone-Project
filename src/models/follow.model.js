const mongoose = require("mongoose");
const followSchema = new mongoose.Schema(
  {
    // ye dono field required hein kyunki bina follower aur following ke follow relation ka koi matlab nahi banta
    follower: { type: String }, // ye username store karega us user ka jo follow kar raha hai
    following: { type: String }, // ye username store karega us user ka jise follow kiya ja raha hai
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
      message : "Status must be either pending, accepted or rejected",
    }, // follow request ka status , pending matlab follow request bheja gaya hai lekin accept ya reject nahi hua hai , accepted matlab follow request accept kar liya gaya hai aur ab dono users ek dusre ko follow kar rahe hein , rejected matlab follow request reject kar di gayi hai
  },
  {
    timestamps: true,
  },
);

const followModel = mongoose.model("Follow", followSchema);
module.exports = followModel;

// edge Collection bote hein ise , ye batata hai kisi bhi do connected user ke beech me kya relation hai ,
//  kya wo ek dusre ko follow kar rahe hein ya nahi , ye dono user ke id ko store karega
