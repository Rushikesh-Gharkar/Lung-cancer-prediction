const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstname : {type:String , minlength:3 , maxlength:12 , required:true , trim:true},
    lastname : {type:String , minlength: 3 , maxlength:10 , trim:true },
    age : {type : Number , required : true},
    email : {type:String , required:true , unique:true , lowercase:true},
    password : {type : String , required:true , minlength:5 }
},
{timestamps : true}
)

const User = mongoose.model('User' , userSchema)

module.exports = User