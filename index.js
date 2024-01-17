const express = require("express");

const app = express();

app.use(()=>{
    console.log("We got a request!")
})


app.listen(3000, ()=>{
    console.log("Port: 3000")
})