const mongoose = require("mongoose");
const { boolean } = require("zod");

mongoose.connect();

// const TodoSchema = mongoose.Schema({
//   title: String,
//   description: String,
//   completed: Boolean,
// });

const TodoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

// const todo = mongoose.model("todos", TodoSchema);

const todo = mongoose.model("todos", TodoSchema);

module.exports = {
  todo,
};
