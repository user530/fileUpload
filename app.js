// Config environmental variables
require(`dotenv`).config();
require(`express-async-errors`);

// Import express and initialise the app
const express = require(`express`);
const app = express();

// Port var
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is up and running at port ${port}...`);
});
