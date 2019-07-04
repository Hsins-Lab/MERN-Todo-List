const mongoose = require('mongoose');
const { Schema } = mongoose;

const TodoSchema = new Schema({
  name: { type: String, required: true },
  done: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Todo', TodoSchema);
