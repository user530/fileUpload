const BadRequestError = require(`./BadRequest`);
const NotFoundError = require(`./NotFound`);
const UnauthenticatedError = require(`./Unauthenticated`);
const CustomError = require(`./CustomError`);

module.exports = {
  CustomError,
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
};
