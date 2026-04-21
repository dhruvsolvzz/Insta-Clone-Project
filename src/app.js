const express = require('express')
const cookieParser = require('cookie-parser')

const authRouter = require('./routes/auth.routes')
const postRouter = require('./routes/post.routes')
const userRouter = require('./routes/user.routes')

// creating an instance of express
const app = express()

// middleware
app.use(express.json())        // body parse
app.use(cookieParser())        // cookies read

// routes
app.use("/api/auth", authRouter)
app.use("/api/posts", postRouter)
app.use("/api/users", userRouter)

// exporting the app
module.exports = app