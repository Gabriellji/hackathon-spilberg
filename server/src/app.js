require('dotenv').config()
const express = require('express')
const app = express()
const employeeRouter = require('./resources/employee/employee.router')
const authRouter = require('./resources/employee/auth.router')
const ideaRouter = require('./resources/idea/idea.router')

app.use(express.json())

app.use('/', (req, res, next) => {
    if (req.originalUrl === '/') {
        res.json({ message: 'Service is running!'})
        return
    }
    next()
})

app.use('/employee', [employeeRouter, ideaRouter])
app.use('/auth', authRouter)

module.exports = app