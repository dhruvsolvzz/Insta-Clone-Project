const postModel = require('../models/post.model')
import ImageKit, { toFile } from '@imagekit/nodejs';



const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY, // This is the default and can be omitted
});


async function createPostController(req, res) {
 const file  = await client.files.upload({
  file: await toFile(Buffer.from(req.file.Buffer), 'file'),
  fileName: 'image',
});
res.send(file)
}

module.exports = createPostController 