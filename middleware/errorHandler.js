// Import error codes
const { StatusCodes } = require(`http-status-codes`);

// Custom error handler middleware
const errorHandler = (error, req, res, next) => {
  // Default error object
  let customError = {
    statusCode: error.status || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: error.message,
  };

  // Catch mongo validation errors
  // Catch mongo duplicate error
  // Catch mongo cast error

  //   Send back error ingormation
  return res.status(customError.statusCode).json({ msg: customError.msg });
};

module.exports = errorHandler;
