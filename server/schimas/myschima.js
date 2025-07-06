const mongoose = require('mongoose');

const mydatapattern = mongoose.Schema({
    fullname:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    dob:{
        type:String
    },
    pass:{
        type:String
    },
    profile:{
        type:String
    }
});






const myschimatype = mongoose.model('userregistor',mydatapattern);

module.exports = myschimatype;



