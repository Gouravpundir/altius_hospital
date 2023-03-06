const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    phone:{
        type:String,
        required:true,
        trim:true
    },
    date:{
        type:Date,
        required:true,
        trim:true
    },
    time:{
        type:String,
        required:true,
        trim:true
    },
    
})


module.exports = mongoose.model('form',formSchema)