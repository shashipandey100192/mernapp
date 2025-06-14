const express = require('express');
require("dotenv").config();
require('./database/connection');
const port = process.env.PORT || 8000



const myapp = express();
    myapp.get("/",(req,res)=>{
        res.send("welcome to express js");
      
    });

    myapp.get("/about",(req,res)=>{
        res.send("this is about pagepppppppppppppppppppppp");
    })

myapp.listen(port,()=>{
    console.log(`server is runing at:${port}`);
});


