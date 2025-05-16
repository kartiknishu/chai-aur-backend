import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";

const app = express();

dotenv.config({
    path: "/.env"
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Listening to port: ${process.env.PORT}`)
    })

}
    
)
.catch((err)=>{
    console.log("ERROR in connecting", err);
})