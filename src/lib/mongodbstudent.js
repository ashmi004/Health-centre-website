// src/lib/mongodbstudent.js
const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env');
}

let isConnected = false;

const connectDBstudent = async () => {
  if (isConnected) {
    console.log('Already connected to MongoDB (student)');
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log('Connected to MongoDB (student)');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw new Error('Could not connect to MongoDB');
  }
};

const disconnectDBstudent = async () => {
  if (!isConnected) {
    console.log('Already disconnected from MongoDB (student)');
    return;
  }

  try {
    await mongoose.disconnect();
    isConnected = false;
    console.log('Disconnected from MongoDB (student)');
  } catch (error) {
    console.error('Error disconnecting from MongoDB:', error);
    throw new Error('Could not disconnect from MongoDB');
  }
};

module.exports = { connectDBstudent, disconnectDBstudent };
