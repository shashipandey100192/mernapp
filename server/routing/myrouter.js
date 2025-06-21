'Access-Control-Allow-Origin'
const express  = require('express');
const mydatapattern = require('../schimas/myschima');

const myapp = express.Router();

myapp.get("/",(req,res)=>{
        res.send("welcome to express js");
      
    });

    myapp.get("/about",(req,res)=>{
        res.send("this is about pagepppppppppppppppppppppp");
    });

    

    myapp.post("/registorpage", async (req,res)=>{
        const {fullname,email,phone,dob,pass,profile} = req.body;
            if(fullname=="" || email=="")
            {
                res.status(200).json({data:postdata,status:288,message:"faild registor"});
            }
            else
            {
            const postdata = new mydatapattern({
            fullname,email,phone,dob,pass,profile
        });
        await postdata.save();
        res.status(200).json({data:postdata,status:255,message:"data registor successfully"});
        // console.log(postdata);

            }

       
    })



module.exports = myapp