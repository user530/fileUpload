// Import mongoose lib
const mongoose = require(`mongoose`);

// Connection function
const connectDB = async (DB_URI) => {
  // Log start
  console.log(`DB connection initialised...`);
  // Connect
  return (
    mongoose
      .connect(DB_URI)
      // Log success
      .then(() => {
        console.log(`DB connection created successfully.`);
      })
      // Log error
      .catch((err) => {
        console.log(`DB connection failed!`);
        throw err;
      })
  );
};

module.exports = connectDB;
