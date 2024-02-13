const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },

  email: { type: String, required: true, unique: true },

  createdAt: { type: Date, default: Date.now },

  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
