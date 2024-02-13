const Thought = require('../models/Thought');

const ThoughtController = {
  getAllThoughts: async (req, res) => {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getThoughtById: async (req, res) => {
    try {
      const thought = await Thought.findById(req.params.thoughtId);
      if (!thought) {
        return res.status(404).json({ error: 'Thought not found' });
      }
      res.json(thought);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createThought: async (req, res) => {
    try {
      const newThought = await Thought.create(req.body);
      res.status(201).json(newThought);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  updateThought: async (req, res) => {
    try {
      const updatedThought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, {
        new: true,
        runValidators: true,
      });
      if (!updatedThought) {
        return res.status(404).json({ error: 'Thought not found' });
      }
      res.json(updatedThought);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deleteThought: async (req, res) => {
    try {
      const deletedThought = await Thought.findByIdAndDelete(req.params.thoughtId);
      if (!deletedThought) {
        return res.status(404).json({ error: 'Thought not found' });
      }
      res.json({ message: 'Thought deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  addReaction: async (req, res) => {
    const { thoughtId } = req.params;
    const { reaction } = req.body;

    try {
      const updatedThought = await Thought.findByIdAndUpdate(
        thoughtId,
        { $push: { reactions: reaction } },
        { new: true }
      );

      if (!updatedThought) {
        return res.status(404).json({ error: 'Thought not found' });
      }

      res.json(updatedThought);
    } catch (error) {
      console.error('Error adding reaction:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  removeReaction: async (req, res) => {
    const { thoughtId } = req.params;
    const { reactionId } = req.body;

    try {
      const updatedThought = await Thought.findByIdAndUpdate(
        thoughtId,
        { $pull: { reactions: reactionId } },
        { new: true }
      );

      if (!updatedThought) {
        return res.status(404).json({ error: 'Thought not found' });
      }

      res.json(updatedThought);
    } catch (error) {
      console.error('Error removing reaction:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};
module.exports = ThoughtController;
