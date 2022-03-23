const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  done: { type: Boolean, required: false },
  description: { type: String, required: false },
});

module.exports = mongoose.model('Todos', todoSchema);
