const mongoose= require('mongoose')
const userSchema=mongoose.Schema({
    email:String,
    lastName:String,
    firstName:String,
    age:String,
},{timeStamps:true})

module.exports=mongoose.model('users',userSchema)