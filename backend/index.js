const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors());

const PORT = process.env.PORT || 3000

app.get('/',function(req,res){
    res.send("express is runnig fine ");
})

app.listen(3000,function(){
    console.log(`server is runnig at the port ${PORT}`)
})