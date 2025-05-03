
const express = require("express");
const app=express();
//console.dir(app); 
let port=8080;
app.listen(port,()=>{
    console.log('app is listening on port ${port}');
});
// app.use((req,res)=>{
//     console.log("request received");
// })
app.get("/",(req,res)=>{
    res.send("yu contacted root path");
})
app.get("/orange",(req,res)=>{
    res.send("you contacted orange path");
})
app.get("/apple",(req,res)=>{
    res.send("you contacted apple path");
})