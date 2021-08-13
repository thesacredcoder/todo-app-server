const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  task: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = model("Task", taskSchema);
