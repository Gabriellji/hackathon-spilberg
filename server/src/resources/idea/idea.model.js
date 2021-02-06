const mongoose = require("mongoose");

const ideaSchema = new mongoose.Schema({
  author_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "employee",
    required: true,
  },
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
  totalDislikes: ["Lolita", "Carlos", "Nina"],
  totalLikes: ['Alfred', "Pedro", "Valentin", "Kristina", "Teiko"],
  created: { type: Date, default: Date.now },
});

const idea = mongoose.model("idea", ideaSchema);

module.exports = idea;
