const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const { check, validationResult } = require('express-validator')

const Idea = require('./idea.model')
const Employee = require('../employee/employee.model')

// Public
// GET /employee/ideas 
// gets all exists ideas

router.get('/ideas', async (req, res) => {
    try {
        const ideas = await Idea.find().populate('employee')
        res.json(ideas)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

// Private
// POST /employee/newidea
// Creates or updates profile

router.post(
    '/newidea',
    [
        auth,
        check('title', 'title is required').isLength({
            min: 4,
        }),
        check('question1', 'question1 is required').isLength({
            min: 10,
        }),
        check('question2', 'question2 is required').isLength({
            min: 10,
        }),
    ],
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        try {
            const idea = await Idea.create({
                author_id: req.user.id,
                ...req.body
            })

            const employee = await Employee.findOne({
                _id: req.user.id
            })

            employee['ideas'].push(idea)

            await employee.save()

            res.status(201).json(idea)
        } catch (err) {
            console.error(err.message)
            return res.status(500).send('Server Error')
        }
    }
)

// Public
// GET /employee/user/:user_id
// gets ideas based on user id

router.get('/user/:user_id', async (req, res) => {
    try {
        const ideas = await Idea.find({
            author_id: req.params.user_id,
        }).populate('employee')

        if (!ideas) {
            return res
                .status(404)
                .json({ msg: 'There is no ideas for this employee' })
        }
        res.json(ideas)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

module.exports = router