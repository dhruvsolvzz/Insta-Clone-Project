// Ye File just server ko start ka4rne ke lia hai aur dastabase se connect karne ke lia hai 

require('dotenv').config()

const app = require('./src/app')
const connectToDatabase = require("./src/config/database")

// database ko connect karna
connectToDatabase() ;
// server ko start karna 
app.listen(3000 , ()=>{
    console.log("Server is running on Port 3000")
})
