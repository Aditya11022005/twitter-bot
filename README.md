# 🤖 Twitter Bot with Sentiment Analysis

A smart Twitter bot built using **Node.js**, **Twitter API v2**, and **MongoDB** that:

- 🔍 Fetches recent tweets based on keywords/hashtags
- 📊 Analyzes the **sentiment** (positive / neutral / negative)
- 💬 Automatically replies to positive tweets with a template message
- 🗂 Logs all tweets and bot actions into MongoDB
- 🌐 Provides a clean UI to view logs, sentiment, and reply status

---

## ⚙️ Features

| Feature                         | Description                                                                 |
|----------------------------------|-----------------------------------------------------------------------------|
| 🔁 Auto-fetch                   | Fetches tweets every 10 minutes (customizable)                             |
| 🧠 Sentiment Analysis           | Uses a sentiment library to classify tweets                                |
| 🤖 Auto-reply                   | Replies to positive tweets automatically                                   |
| 💾 MongoDB Logging              | Stores tweet ID, text, timestamp, sentiment, reply status                  |
| 🌐 UI Dashboard                 | View tweet logs at `/logs` with filters and stats                          |
| 🔐 Secure .env Configuration    | Twitter keys, bot settings, and MongoDB URI stored in `.env`               |

---

## 🛠 Tech Stack

- **Backend**: Node.js, Express.js
- **Twitter API**: v2 (Recent Search endpoint)
- **Sentiment Analysis**: `sentiment` npm package
- **Database**: MongoDB (Compass or Atlas)
- **UI**: EJS + Bootstrap 5

---

## 📁 Folder Structure

twitter-bot/
├── models/
│ └── TweetLog.js # Mongoose schema
├── routes/
│ └── logs.js # UI route
├── services/
│ └── twitter.js # Twitter API fetch & reply
├── views/
│ └── logs.ejs # Logs UI view
├── .env # Configuration
├── index.js # Main server file
├── job.js / cron.js # Background fetch logic
├── package.json

---

## 🚀 Getting Started

### 🔧 1. Clone the repo

```bash
git clone https://github.com/Aditya11022005/twitter-bot.git
cd twitter-bot
📦 2. Install dependencies
bash
Copy
Edit
npm install
🧪 3. Create .env file
makefile
Copy
Edit
TWITTER_API_KEY=your_api_key
TWITTER_API_SECRET=your_api_secret
TWITTER_ACCESS_TOKEN=your_access_token
TWITTER_ACCESS_TOKEN_SECRET=your_access_token_secret

KEYWORDS=#javascript,#ai
MONGO_URI_LOCAL=mongodb://127.0.0.1:27017/twitterBot
LOG_LEVEL=info
MAX_REPLIES_PER_CYCLE=10
MIN_SENTIMENT_SCORE=2
▶️ 4. Run the bot
bash
Copy
Edit
node index.js
Visit http://localhost:3000/logs to see logs.

🧪 Optional Scripts
Script	Description
node job.js	Manually run fetch + reply logic
node index.js	Start server with UI logs view
