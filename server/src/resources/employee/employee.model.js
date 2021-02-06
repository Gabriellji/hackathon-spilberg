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
  ideas: [
    {
      title: {
        type: String,
        required: true,
      },
      question1: {
        type: String,
        required: true,
      },
      question2: {
        type: String,
        required: true,
      },
      question3: {
        type: String,
      },
      totalDislikes: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "employee",
          required: true
        },
      ],
      totalLikes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "employee",
        required: true
      }],
      created: { type: Date, default: Date.now },
    },
  ],
});

const employee = mongoose.model("employee", employeeSchema);

module.exports = employee;
