const mongoose = require("mongoose");

const connectDB = () => {
  if (!process.env.MONGODB_URL) {
    console.log("MONGODB_URL is required");
    process.exit(1);
  }

  return mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
};

module.exports = connectDB;
