// seed/seedUsers.js
const mongoose = require('mongoose');
const User = require('../models/User.js');

mongoose.connect('mongodb://localhost/social_network_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const users = [
  { username: 'user1', email: 'user1@example.com' },
  { username: 'user2', email: 'user2@example.com' },
  // Add more users as needed
];

// Function to seed users into the database
async function seedUsers() {
  try {
    await User.deleteMany(); // Clear existing users
    const createdUsers = await User.create(users);
    console.log('Users seeded successfully:', createdUsers);
  } catch (error) {
    console.error('Error seeding users:', error);
  } finally {
    mongoose.disconnect();
  }
}

seedUsers();
