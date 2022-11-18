// Config environmental variables
require(`dotenv`).config();
require(`express-async-errors`);

// Import express and initialise the app
const express = require(`express`);
const app = express();

const htmlRouter = require(`./routes/htmlRouter`);
app.use(`/`, htmlRouter);

// Port var
const port = process.env.PORT || 5000;

// Import DB connection function
const connectDB = require(`./db/connectDB`);
const router = require("./routes/htmlRouter");

// Start function
const start = async () => {
  try {
    // Connect to the DB
    await connectDB(process.env.MONGO_URI);

    // Start listen
    app.listen(port, () => {
      console.log(`Server is up and running at port ${port}...`);
    });
  } catch (error) {
    // Log error
    console.log(error);

    // Exit
    process.exit(1);
  }
};

// Start app
start();
