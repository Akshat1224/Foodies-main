require('dotenv').config();
const mongoose = require('mongoose');

function connectDB() {
    console.log('⏳ Connecting to MongoDB...');

    mongoose.connect(process.env.MONGO_CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('✅ MongoDB connected successfully!');
    })
    .catch((err) => {
        console.error('❌ MongoDB connection failed:', err.message);
    });
}

module.exports = connectDB;
