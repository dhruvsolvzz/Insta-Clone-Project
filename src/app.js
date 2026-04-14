// APP ko create karna hai 

const cookieParser = require('cookie-parser');
const express = require('express')
const appRouter = require('./routes/auth.routes');
const authRouter = require('./routes/auth.routes');
// creating an instance of express
const app = express() ;
//middleWare read the data from thhe body
app.use(express.json())
// to parce secreat jwt token in Cookies
app.use(cookieParser())

app.use("/api/auth" , authRouter)


//exporting the app
module.exports = app ;