const postModel = require("../models/post.model");
const jwt = require("jsonwebtoken");

async function createPostController(req, res) {
  try {
    // @imagekit/nodejs v7+ is ESM-only, use dynamic import in a CJS project
    const { default: ImageKit, toFile } = await import("@imagekit/nodejs");
   
    const imagekit = new ImageKit({
      publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
      urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
    });

    const file = await imagekit.files.upload({
      file: await toFile(Buffer.from(req.file.buffer), req.file.originalname),
      fileName: req.file.originalname,
      folder: "/cohort-2-instaClone-posts",
    });

    const post = await postModel.create({
      caption: req.body.caption,
      imgUrl: file.url,
      user: req.user.userId,
    });

    res.status(201).json(file);
  } catch (error) {
    console.error("Post creation error:", error);
    res
      .status(500)
      .json({ msg: "Failed to create post", error: error.message });
  }
}

async function getAllPostsController(req, res) {
 
  const userId = req.user.userId;

  const posts = await postModel
    .find({user : userId})

    res.status(200).json({
      msg : "All Posts",
      posts
    })
    
}
async function getPostDetailsController(req, res) {
 
  const userId = req.user.userId; ;
  const postId = req.params.postid;

  const post = await postModel.findById(postId);
  if (!post) {
    return res.status(404).json({
      msg: "Post not found",
    });
  } 
  if (post.user.toString() !== userId) {
    return res.status(403).json({
      msg: "Unauthorized access to this post",
    });
  }
  
  res.status(200).json({
    msg: "Post Details",
    post,
  });
}
module.exports = { createPostController , getAllPostsController ,getPostDetailsController };
