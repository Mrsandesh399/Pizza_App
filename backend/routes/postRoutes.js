const express = require('express');
const router= express.Router();
/* const jwt=require('jsonwebtoken');
const jwtSecret="asdfrtuyxsde4677dff788" */
const signupModel=require('../db/UsersSchema')
const proModel=require('../db/ProductSchema');
const Order=require("../db/OrderSchema")

//jwt setup
/* function autenticateToken(req,res,next){
    const authHeader=req.headers['authorization'];
    const token=authHeader && authHeader.split(' ')[1];
    console.log(token);
    if(token==null){
        res.json({"err":1,"msg":"Token not matched"})
    }
    else{
        jwt.verify(token,jwtSecret,(err,data)=>{
            if(err){
                res.json({"err":1,"msg":"Token is invalid"})
            }
            else{
                next();
            }
        })
    }
} */

//for signup page
router.post("/signup",(req,res)=>{
    let name=req.body.name;
    let email=req.body.email;
    let password=req.body.password;
    let contact=req.body.contact;

    let ins=new signupModel({email:email,password:password,name:name,contact:contact});
    console.log(ins)
    ins.save((err)=>{
        if(err){
            res.json({"err":1,'msg':"Not Registered"})
        }
        else{
            res.json({"err":0,'msg':'Registered'})
        }
    })
})

//for login page
router.post("/login",(req,res)=>{
    let email=req.body.email;
    let password=req.body.password;
    signupModel.findOne({email:email,password:password},(err,data)=>{
        if(err){
            res.json({"err":1,'msg':"Invalid email or password"})
        }
        else if(data== null){
            res.json({"err":1,'msg':'Fill all the field'})
        }
        else{
            res.json({"err":0,'msg':'Login success'})

        }
        // res.json({"err":0,'msg':'Login success'})

        /* else{
            let payload={
                uid:email
            }
            // const token=jwt.sign(payload,jwtSecret,{expiresIn:360000})
            res.json({"err":0,'msg':'Login success'})//token passes to frontend 
        } */
    })
});
        
//for menu items
router.get("/products", async(req,res)=>{
    const products = await proModel.find({});
    res.json(products);
    res.send("Hello All")
});

router.get("/orderdetails", (req, res) => {
    Order.find({}, (err, data) => {
        if (err) throw err;
        res.send(data);
    });
});

router.post("/carddetails", (req, res) => {
    let field = {
        name: req.body.name,
        iteams:req.body.iteams,
        cardnumber: req.body.cardnumber,
        total: req.body.total,
    };
    let ins = new Order(field);
    ins.save((err) => {
        if (err) {
            res.send("Error");
        } else {
            res.send({ flag: 1, msg: "Details Added" });
        }
    });
});


module.exports=router;