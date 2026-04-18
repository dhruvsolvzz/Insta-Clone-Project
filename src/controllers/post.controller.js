const postModel = require('../models/post.model')

async function createPostController(req, res) {
  try {
    // @imagekit/nodejs v7+ is ESM-only, use dynamic import in a CJS project
    const { default: ImageKit, toFile } = await import('@imagekit/nodejs')

    const imagekit = new ImageKit({
      publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
      urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
    })

    const file = await imagekit.files.upload({
      file: await toFile(Buffer.from(req.file.buffer), req.file.originalname),
      fileName: req.file.originalname,
      folder: '/posts',
    })

    res.status(200).json(file)
  } catch (error) {
    console.error('Post creation error:', error)
    res.status(500).json({ msg: 'Failed to create post', error: error.message })
  }
}

module.exports = { createPostController }