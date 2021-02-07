const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const Like = require("./like.model");
const Idea = require('../idea/idea.model')
const Employee = require("../employee/employee.model");

module.exports = router;
