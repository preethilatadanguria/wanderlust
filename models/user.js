const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose=require("passport-local-mongoose");

//username and password will be automaticallyy defined by the passport local mongoose..also adds few methods
const userSchema=new Schema({
    email:{
        type:String,
        required:true,
    }
})
userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', userSchema);