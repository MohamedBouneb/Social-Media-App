const express = require('express')
require('dotenv').config()
const app = express()


app.get('/' ,(req,res)=>{
    res.send("hello social media app")
})

app.listen(process.env.PORT, ()=>
{
    console.log(`app listing on port ${process.env.PORT}`);
})