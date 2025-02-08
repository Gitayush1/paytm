const mongoose = require('mongoose');

//Connecting to MongoDB
mongoose.connect("mongodb+srv://ayush23:mongodb12345@cluster0.ohxta.mongodb.net/paytm")

// Create a schema for the user
const userSchema = mongoose.Schema({
    username : String,
    password : String,
    firstName : String,
    lastName : String
})

const accountSchema = mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,          // eg -> String
        ref : 'User',
        required : true
    },
    balance : {
        type : Number,
        required : true
    }
})

//Create a model from the Schema
const User = mongoose.model('User',userSchema)
const Account = mongoose.model('Account',accountSchema)

module.exports = {
    User ,
    Account
}