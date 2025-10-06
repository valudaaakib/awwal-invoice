// Import express
const express = require('express');

// Initialize app
const app = express();

// Define a port
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Example POST route
app.post('/data', (req, res) => {
  res.json({
    message: 'Data received!',
    data: req.body
  });
});

// Start the server
app.listen();
