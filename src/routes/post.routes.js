const express = require('express');
const postRouter = express.Router();
const { createPostController , getAllPostsController , getPostDetailsController , likePostController } = require('../controllers/post.controller');
const multer = require('multer');
const {identifyUserController} = require('../middlewares/auth.middleware');

const upload = multer({ storage: multer.memoryStorage() });

postRouter.post('/', upload.single('image'), identifyUserController, createPostController);
postRouter.get('/allPosts', identifyUserController, getAllPostsController); 
postRouter.get('/details/:postid', identifyUserController, getPostDetailsController); 
postRouter.post('/like/:postid', identifyUserController, likePostController);
// postRouter.post('/unlike/:postid', identifyUserController, unlikePostController);
// return karegi ek user ke specific post details aur varify karegi ki post usi user ka hai ya nahi , agar nahi hai toh unauthorized access return karegi 

module.exports = postRouter;