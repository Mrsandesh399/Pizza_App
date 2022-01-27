const express = require ("express")
const mongoose = require("mongoose")
const PORT=8899;
const app=express();
const cors= require("cors");

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors())


const db="mongodb://localhost:27017/pizza_menu";

const connectDB=async()=>{
    try{
        await mongoose.connect(db,{useNewUrlParser: true});
        console.log("mongoDb connected")
    }
    catch(err){
        console.log(err.message);
    }
}

connectDB();
const postRoutes=require('./routes/postRoutes');
app.use("/api/posts",postRoutes)

const proModel= require("./db/ProductSchema")

app.get("/products",async(req,res)=>{
    const products= await proModel.find({});

})




app.listen(PORT,(err)=>{
    if (err) throw err;
    console.log(`work on ${PORT}`)
})