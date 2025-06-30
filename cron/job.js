const cron = require('node-cron');
const { fetchTweets, replyToTweet } = require('../services/twitter');
const analyzeSentiment = require('../services/sentiment');
const TweetLog = require('../models/TweetLog');
const templates = require('../utils/replyTemplates');

const keyword = '#javascript'; // Change as needed

cron.schedule('*/10 * * * *', async () => {
  console.log(`Fetching tweets for: ${keyword}`);
  const tweets = await fetchTweets(keyword);

  for (const tweet of tweets) {
    const tone = analyzeSentiment(tweet.text);

    const log = new TweetLog({
      tweetId: tweet.id,
      text: tweet.text,
      user: tweet.author_id,
      sentiment: tone,
      replied: false,
    });

    // Only reply if positive
    if (tone === 'positive') {
      const message = templates[Math.floor(Math.random() * templates.length)];
      try {
        const replyId = await replyToTweet(tweet.id, message);
        log.replied = true;
        log.replyId = replyId;
      } catch (err) {
        console.error('Failed to reply:', err);
      }
    }

    await log.save();
  }
});
