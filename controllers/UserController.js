const User = require('../models/User.js');

const UserController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error', error });
    }
  },

  getUserById: async (req, res) => {
    try {
      const user = await User.findById(req.params.userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createUser: async (req, res) => {
    console.log("Incoming Request Object - req.body: ", req.body);
    try {
      const newUser = await User.create(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  updateUser: async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, {
        new: true,
        runValidators: true,
      });
      if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.userId);
      if (!deletedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  addFriend: async (req, res) => {
    try {
      const user = await User.findById(req.params.userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      const friendId = req.body.friendId;
      if (!friendId) {
        return res.status(400).json({ error: 'Friend ID is required' });
      }
      if (user.friends.includes(friendId)) {
        return res.status(400).json({ error: 'Friend already added' });
      }
      user.friends.push(friendId);
      await user.save();
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  removeFriend: async (req, res) => {
    try {
      const user = await User.findById(req.params.userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      const friendId = req.params.friendId;
      if (!friendId) {
        return res.status(400).json({ error: 'Friend ID is required' });
      }
      const index = user.friends.indexOf(friendId);
      if (index === -1) {
        return res.status(400).json({ error: 'Friend not found' });
      }
      user.friends.splice(index, 1);
      await user.save();
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = UserController;
