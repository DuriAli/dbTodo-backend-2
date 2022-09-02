const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
  valueID: Number,
  strText: String,
  isDone: Boolean
});

module.exports = mongoose.model('Tasks', TaskSchema);
