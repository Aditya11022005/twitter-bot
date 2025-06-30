const { TwitterApi } = require('twitter-api-v2');
const client = new TwitterApi(process.env.TWITTER_BEARER);
const rwClient = new TwitterApi({
  appKey: process.env.TWITTER_APP_KEY,
  appSecret: process.env.TWITTER_APP_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_SECRET,
});

module.exports = {
  fetchTweets: async (keyword) => {
    const res = await client.v2.search(keyword, {
      max_results: 10,
      'tweet.fields': ['author_id', 'created_at'],
    });
    return res.tweets;
  },

  replyToTweet: async (tweetId, message) => {
    const { data } = await rwClient.v2.reply(message, tweetId);
    return data.id;
  },
};
