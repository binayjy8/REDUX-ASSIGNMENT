const mongoose = require('mongoose');

const mongoURI = process.env.MONGODB_URI;

let isConnected = false;

const initializeDatabase = async () => {
  if (isConnected) return;
  try {
    await mongoose.connect(mongoURI);
    isConnected = true;
    console.log('Connected Successfully');
  } catch (error) {
    console.log('Connection Failed', error);
  }
};

module.exports = { initializeDatabase };