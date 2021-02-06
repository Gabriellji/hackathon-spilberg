const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  ideas: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'employee',
  }],
});

const employee = mongoose.model("employee", employeeSchema);

module.exports = employee;
