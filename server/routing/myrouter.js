'Access-Control-Allow-Origin'
const express  = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mydatapattern = require('../schimas/myschima');

const myapp = express.Router();


const JWT_SECRET = 'shashipandey';

myapp.get("/",(req,res)=>{
        res.send("welcome to express js");
      
    });

    myapp.get("/about",(req,res)=>{
        res.send("this is about pagepppppppppppppppppppppp");
    });

    

    myapp.post("/registorpage", async (req,res)=>{
            const {fullname,email,phone,dob,pass,profile} = req.body;

             const hashedPassword = await bcrypt.hash(pass,10);
            if(fullname=="" || email=="")
            {
                res.status(200).json({data:postdata,status:288,message:"faild registor"});
            }
            else
            {
            const postdata = new mydatapattern({
            fullname,email,phone,dob,pass:hashedPassword,profile
        });
        await postdata.save();
        res.status(200).json({data:postdata,status:255,message:"data registor successfully"});
        // console.log(postdata);

            }
    });

    myapp.get("/allemplist", async(req,res)=>{
        const allemp = await mydatapattern.find();
         res.status(200).json({allemp:allemp,status:220,message:"all emp list"});
        console.log(allemp);
    });


    myapp.delete("/deleterecord/:id", async(req,res)=>{
        const {id} = req.params;
        const removerecord = await mydatapattern.findByIdAndDelete({_id:id});
        res.status(200).json({message:"selected data removed"});
        console.log(removerecord);
    });


    myapp.post("/userlogin", async(req,res)=>{
          const {email,pass} = req.body;
          const userrecord = await mydatapattern.findOne({email:email});
            if(userrecord)
            {
                if(userrecord.email==email && bcrypt.compare(pass, userrecord.pass))
                {
                    const token = jwt.sign({ email: userrecord.email, pass: userrecord.pass }, JWT_SECRET, {
                            expiresIn: '1h'
                    });
                    res.status(200).json({message:"successfully login",status:240,mytoken:token});
                }
                else
                {
                    res.status(200).json({message:"user and password not match",status:680});
                } 
            }
            else
            {
                res.status(200).json({message:"user not find",status:420});
            }   
    });



    myapp.get("/singleuserrecord/:id", async(req,res)=>{
        const {id} =req.params;
            const singleuser = await mydatapattern.findById({_id:id});
             res.status(200).json({message:"single user data",status:255,mydata:singleuser});
             console.log(singleuser);
    });


     myapp.patch("/userupdate/:id", async(req,res)=>{
        const {id} =req.params;
            const singleuser = await mydatapattern.findByIdAndUpdate(id,req.body,{new:true});
             res.status(200).json({message:"update user",status:251,mydata:singleuser});
             console.log(singleuser);
    });



module.exports = myapp

