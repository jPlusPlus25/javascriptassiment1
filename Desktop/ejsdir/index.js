
const express = require("express");
const app=express();
let port= 8080;
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});

app.use((req,res)=>{
    // console.log(req);
    console.log("request received");
    res.send(
        "<h1>Fruits</h1> <ul><li>apple</li><li>orange</li></ul>"    
    );
});