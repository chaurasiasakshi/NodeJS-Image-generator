const express = require("express")
const dotenv = require("dotenv").config();

port  = process.env.PORT || 5000;

app=express();

app.use('/openai',require('./routes/openaiRoutes'));


app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
})