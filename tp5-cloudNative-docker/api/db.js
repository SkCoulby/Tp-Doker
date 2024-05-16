const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/tp5-cloudnative-docker', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB database successfully!');
  } catch (error) {
    console.error('Failed to connect to MongoDB database:', error);
    process.exit(1);
  }
};

module.exports = dbConnection;
