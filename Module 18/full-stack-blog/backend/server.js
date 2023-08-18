const app = require('./app');
require('dotenv').config();
app.get("/",(req, res)=>{
    res.send("Server running");
})

app.listen(process.env.PORT, ()=> {
    //console.log('Hello World')
})