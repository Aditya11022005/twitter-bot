const mongoose = require('mongoose');

const uri = process.env.USE_MONGO === 'cloud'
  ? process.env.MONGO_URI_CLOUD
  : process.env.MONGO_URI_LOCAL;

mongoose.connect(uri)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err.message));
