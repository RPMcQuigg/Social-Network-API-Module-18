const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3030;


const User = require('./models/User.js');
const Thought = require('./models/Thought.js');

app.use(express.json());

app.use('/api/users', require('./routes/api/userRoutes.js'));
app.use('/api/thoughts', require('./routes/api/thoughtRoutes.js'));

db.once('open', () => {
  app.listen(PORT, (err) => {
    console.log(err);
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
