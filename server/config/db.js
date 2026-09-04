// ==========================================
// 🍃 MONGODB DATABASE CONNECTION CONFIG
// Developer: Shahbaz Shafi
// Description: Manages the connection lifecycle to 
// MongoDB using the Mongoose ODM library.
// ==========================================

const mongoose = require('mongoose');

/**
 * Connects to MongoDB database using URI from environment variable.
 * Automatically handles reconnection and logs clear connection status.
 */
const connectDB = async () => {
  try {
    // Read connection string or fallback to standard local MongoDB port
    const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio';

    console.log('⏳ Connecting to MongoDB database...');
    const conn = await mongoose.connect(mongoURI);

    console.log(`✅ MongoDB Connected Successfully: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Failed: ${error.message}`);
    console.log('💡 Tip: Make sure your MongoDB service is running or check MONGO_URI in .env');
    // Exit process with failure code
    process.exit(1);
  }
};

module.exports = { connectDB };
