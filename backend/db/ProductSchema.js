const mongoose= require('mongoose');
const ProductSchema=new mongoose.Schema({
    name:{type:String,require:true,unique:true},
    image:{type:String, require:true},
    price:{type:String,require:true}
})

module.exports=mongoose.model("items",ProductSchema)