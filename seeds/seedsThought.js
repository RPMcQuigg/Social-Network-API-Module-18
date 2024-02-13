const mongoose = require('mongoose');
const Thought = require('../models/Thought.js');
const User = require('../models/User.js');

mongoose.connect('mongodb://localhost/social_network_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



    const thoughts = [
      { text: 'Thought 1', author: users[0]._id },
      { text: 'Thought 2', author: users[1]._id },
    ];
    
    async function seedThoughts() {
      try {
        await Thought.deleteMany();
        
        const users = await User.find();
    
    const createdThoughts = await Thought.create(thoughts);
    console.log('Thoughts seeded successfully:', createdThoughts);
  } catch (error) {
    console.error('Error seeding thoughts:', error);
  } finally {
    mongoose.disconnect();
  }
}

seedThoughts();
