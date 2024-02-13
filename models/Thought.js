const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
  text: { type: String, required: true },

  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

  createdAt: { type: Date, default: Date.now },

  reactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reaction' }],
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
