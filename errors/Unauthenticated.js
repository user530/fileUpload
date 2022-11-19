const { StatusCodes } = require(`http-status-codes`);
const CustomError = require(`./CustomError`);

class UnauthenticatedError extends CustomError {
  constructor(msg) {
    super(msg);
    this.status = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnauthenticatedError;
