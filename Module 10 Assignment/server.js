const express = require('express')
const app = express();
const router =require('./src/Routes/ProductRoute');


// Routing Implement
app.use("/products",router)


// Undefined Route Implement
app.use("*",(req,res)=>{
    res.status(404).json({status:"fail",data:"not found"})
})


app.listen(3000, function(){
    console.log("Server started.")
});