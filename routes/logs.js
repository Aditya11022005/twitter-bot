const express = require('express');
const router = express.Router();
const TweetLog = require('../models/TweetLog');

router.get('/', async (req, res) => {
  const logs = await TweetLog.find().sort({ timestamp: -1 }).limit(50);
  res.render('logs', { logs });
});

module.exports = router;
