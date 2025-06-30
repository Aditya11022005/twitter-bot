require('dotenv').config();
const express = require('express');
const mongoose = require('./config/db');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/logs', require('./routes/logs'));

// Default route
app.get('/', (req, res) => res.redirect('/logs'));

// Start server
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));

// Start cron job
require('./cron/job');
