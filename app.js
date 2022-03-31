const { loaduser}=require("./sheetdata_model")

const express= require("express");
const app=express();



app.get("/users",( req,res)=>{
    
    res.send(loaduser())
})



const port=3000;
app.listen(port,()=>console.log("server running port 3000"))