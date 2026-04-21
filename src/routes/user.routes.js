const express = require('express');
const userRouter = express.Router();
const { followUserController , unfollowUserController , likePostController } = require('../controllers/user.controller');
const { identifyUserController} = require('../middlewares/auth.middleware');


userRouter.post('/follow/:username', identifyUserController, followUserController);
userRouter.post('/unfollow/:username', identifyUserController, unfollowUserController);



module.exports = userRouter;