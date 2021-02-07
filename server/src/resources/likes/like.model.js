const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
  author_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "employee",
    required: true
  },
    username: {
        type: String,
        required: true
    } ,
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    }
  
});

const like = mongoose.model("like", likeSchema);

module.exports = like;
