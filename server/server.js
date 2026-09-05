// ==========================================
// 🚀 SERVER ENTRY POINT (Express + Node.js)
// Description: Main backend server handling routes, 
// database connection, security, and error handling.
// ==========================================

require('dotenv').config();
const express = require('express');
const cors = require('cors');

// Import database connection configuration
const { connectDB } = require('./config/db');

// Import centralized error handler middleware
const errorHandler = require('./middleware/errorHandler');

// Import feature routes
const projectRoutes = require('./routes/projects');
const skillRoutes = require('./routes/skills');
const contactRoutes = require('./routes/contact');

// Initialize the Express app
const app = express();

// ------------------------------------------
// 1. DATABASE INITIALIZATION
// ------------------------------------------
// Connect to MongoDB Atlas or local MongoDB instance
connectDB();

// ------------------------------------------
// 2. GLOBAL MIDDLEWARE
// ------------------------------------------
// Allow frontend origin (defaulting to Vite dev port or deployed URL)
const clientUrl = process.env.CLIENT_URL || 'https://mypersonalportoliowebsite-thiranex-4m7r9on2b-ss-stds-projects.vercel.app';
const allowedOrigins = [clientUrl, 'http://localhost:5173'];
app.use(cors({ 
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error('Origin is not allowed by CORS'));
  },
  credentials: true 
}));

// Parse incoming JSON request payloads
app.use(express.json());

// Simple root health check endpoint
app.get('/', (req, res) => {
  res.json({
    status: 'online',
    message: '🚀 Portfolio API is running smoothly',
    timestamp: new Date().toISOString()
  });
});

// ------------------------------------------
// 3. API ROUTE MOUNTING
// ------------------------------------------
// Projects endpoints: GET /api/projects, POST /api/projects, etc.
app.use('/api/projects', projectRoutes);

// Skills endpoints: GET /api/skills
app.use('/api/skills', skillRoutes);

// Contact form endpoints: POST /api/contact
app.use('/api/contact', contactRoutes);

// ------------------------------------------
// 4. CENTRAL ERROR HANDLING
// ------------------------------------------
// Catches all unhandled errors and responds with clean JSON
app.use(errorHandler);

// ------------------------------------------
// 5. SERVER LISTENER
// ------------------------------------------
const PORT = process.env.PORT || 5000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`\n==================================================`);
    console.log(`📡 Portfolio Backend Server Started!`);
    console.log(`🔗 Local Access: http://localhost:${PORT}`);
    console.log(`🌍 Client Origin: ${clientUrl}`);
    console.log(`==================================================\n`);
  });
}

module.exports = app;
