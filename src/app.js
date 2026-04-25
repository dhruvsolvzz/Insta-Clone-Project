const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const authRouter = require('./routes/auth.routes')
const postRouter = require('./routes/post.routes')
const userRouter = require('./routes/user.routes')

// creating an instance of express
const app = express()

// middleware
app.use(express.json())        // body parse
app.use(cookieParser())        // cookies read
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));           // cross-origin resource sharing
// routes
app.use("/api/auth", authRouter)
app.use("/api/posts", postRouter)
app.use("/api/users", userRouter)

// exporting the app
module.exports = app