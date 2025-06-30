const mongoose = require('mongoose');

const TweetLogSchema = new mongoose.Schema({
  tweetId: String,
  text: String,
  user: String,
  sentiment: String,
  replied: Boolean,
  replyId: String,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('TweetLog', TweetLogSchema);
