const express = require('express')

const app = express()

const port = 4000

app.get('/' ,(req,res)=>{
    res.send("hello social media app")
})

app.listen(port, ()=>
{
    console.log(`app listing on port ${port}`);
})