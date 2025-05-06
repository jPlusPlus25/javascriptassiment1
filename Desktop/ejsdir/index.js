
const express = require("express");
const app=express();
const port= 8090;
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})
