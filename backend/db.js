const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://kumarankit7613:kankit7613@cluster0.wxppf0z.mongodb.net/todos"
);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo: todo,
};
