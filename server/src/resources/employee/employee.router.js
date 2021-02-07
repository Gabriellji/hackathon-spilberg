const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { check, validationResult } = require('express-validator')

const Employee = require('./employee.model')

// POST /employee
// register
router.post(
    '/',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('username', 'Username is required').not().isEmpty(),
        check('position', 'Position is required').not().isEmpty(),
        check(
            'password',
            'Please enter a password with 6 or more characters'
        ).isLength({ min: 6 }),
    ],
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(401).json({ errors: errors.array() })
        }

        const { name, username, email, position, password } = req.body

        try {
            let user = await Employee.findOne({ email })

            if (user) {
                return res
                    .status(400)
                    .json({ errors: [{ msg: 'User already exists' }] })
            }

            user = new Employee({
                name,
                username,
                position,
                email,
                password,
            })

            const salt = await bcrypt.genSalt(10)

            user.password = await bcrypt.hash(password, salt)

            await user.save()

            const payload = {
                user: {
                    id: user.id,
                },
            }

            jwt.sign(
                payload,
                process.env.JWT_SECRET_KEY,
                { expiresIn: 360000 },
                (err, token) => {
                    if (err) throw err
                    res.json({ token })
                }
            )
        } catch (err) {
            console.error(err.message)
            res.status(500).send('Server error')
        }
    }
)

// Public
// GET /employee 
// gets all exists employees

router.get('/users', async (req, res) => {
    try {
        const employees = await Employee.find().select('-password')
        res.json(employees)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

module.exports = router