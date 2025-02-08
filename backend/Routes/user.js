const express = require("express")
const zod = require('zod')
const jwt = require('jsonwebtoken')
const { User } = require("../db")
const JWT_SECRET = require("../config")
const {authMiddleware} = require("./middleware")
const {Account} = require('../db')

const userRouter = express.Router()

const signUpBody = zod.object({
    username : zod.string().email(),
    firstName : zod.string(),
    lastName : zod.string(),
    password : zod.string()
})

userRouter.post('/signup', async (req,res) => {

    //Checking the entered inputs
    const {success} = signUpBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    //Checking for existing user
    const existingUser = await User.findOne({
        username : req.body.username
    })
    if(existingUser){
        return res.status(411).json({
            message: "Email already taken/Incorrect inputs"
        })
    }

    const user = await User.create({
        username : req.body.username,
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        password : req.body.password
    })
    const userId = user._id;

    // Create a account for the user
    await Account.create({
        userId,
        balance : 1 + Math.random() * 10000
    })


    const token = jwt.sign({
        userId
    },JWT_SECRET)

    res.json({
        message: "User created successfully",
        token: token
    })

})

//


const signInBody = zod.object({
    username : zod.string().email(),
    password : zod.string()
})

userRouter.post("/signin" , async (req,res) => {

    const {success} = signInBody.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            message : "Incorrect Inputs"
        })
    }

    const user = await User.findOne({
        username : req.body.username,
        password : req.body.password
    })
    const userId = user._id;

    if (!user) {
        return res.status(401).json({
            message: "Invalid credentials"
        });
    }

    const token = jwt.sign({ userId }, JWT_SECRET);

    res.json({
        message : "Sign in successful",
        token
    })

})  

//

const updateBody = zod.object({
    password : zod.string().optional(),
    firstName : zod.string().optional(),
    lastName : zod.string().optional()
})

userRouter.put('/update',authMiddleware, async (req , res) => {

    const {success} = updateBody.safeParse(req.body)

    if(!success) {
        res.status(411).json({
            message: "Error while updating information"
        })
    }

    await User.updateOne({_id : req.userId} , req.body)

    res.json({
        message : "updated successfully"
    })

})

//

userRouter.get('/bulk' , async (req,res) => {

    const filter = req.query.filter || "";

    const users = await User.find({
        $or : [{
            firstName : {
                "$regex" : filter
                }
            },{
                lastName : {
                    "$regex" : filter
                }
            }]          
    })

    res.json({
        user : users.map((user) => ({
            username : user.username,
            firstName : user.firstName,
            lastName : user.lastName,
            _id : user._id
        }))
    })

})


module.exports = userRouter  //Default export