const followerModel = require('../models/follow.model');
const userModel = require('../models/user.model');
const likeModel = require('../models/like.model');

const followUserController = async (req, res) => {
 const followerUsername = req.user.username; // jo follow kar raha hai uska id
 const followingUsername = req.params.username; // jise follow karna hai uska id 

    if (followerUsername === followingUsername) {
        return res.status(400).json({
            msg : "You cannot follow yourself"
        })
    }
     
     const isUserExist = await userModel.findOne({username : followingUsername})
     if (!isUserExist) {
        return res.status(404).json({
            msg : "User to follow not found"
        })
     }


    const isFollowing = await followerModel.findOne({
        follower : followerUsername,
        following : followingUsername
    })

    if (isFollowing) {
        return res.status(400).json({
            msg : "You are already following this user"
        })
    }

    const followRecord = await followerModel.create({
        follower : followerUsername,
        following : followingUsername
    })
 
    res.status(200).json({
        msg : `You are now following ${followingUsername}`,
        follow  :followRecord
    })

}

const unfollowUserController = async (req, res) => {
 
     const followerUsername = req.user.username; // jo follow kar raha hai uska id
     const followingUsername = req.params.username; // jise follow karna hai uska id 

     const isUserFollowing = await followerModel.findOne({
        follower : followerUsername,
        following : followingUsername
     })
     if(!isUserFollowing) {
        return res.status(400).json({
            msg : "You are not following this user"
        })
     }

     await followerModel.deleteOne({
        follower : followerUsername,
        following : followingUsername
     })

     res.status(200).json({
        msg : `You have unfollowed ${followingUsername}`
     })

}



module.exports = { followUserController, unfollowUserController };