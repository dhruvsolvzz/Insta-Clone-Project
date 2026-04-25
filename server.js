// Ye File just server ko start karne ke lia hai aur database se connect karne ke lia hai 

require('dotenv').config()

const app = require('./src/app')
const connectToDatabase = require("./src/config/database")

// database ko connect karna
connectToDatabase() ;
// server ko start karna 
app.listen(3000 , ()=>{
    console.log("Server is running on Port 3000")
})
