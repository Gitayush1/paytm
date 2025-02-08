const express = require('express');
const userRouter = require('./user');
const {accountRouter} = require('./account')

const mainRouter = express.Router()

mainRouter.use("/user" , userRouter)
mainRouter.use("/account" , accountRouter )

module.exports = mainRouter;

// /api/v1/user
// /api/v1/transaction