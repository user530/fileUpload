// Import error codes
const { StatusCodes } = require(`http-status-codes`);

// Middleware to handle unexisting routes
const notFound = (req, res, next) => {
  // Inform the user
  return res.status(StatusCodes.NOT_FOUND).send(`Page not found!`);
};

module.exports = notFound;
