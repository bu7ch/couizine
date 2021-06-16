const httpStatusCode = require("http-status-codes");

exports.logError = (error, req, res, next) => {
  console.error(error.stack);
  next(error);
};

exports.respondNoResourceFound = (req, res) => {
  let errorCode = httpStatusCode.StatusCodes.NOT_FOUND;
  res.status(errorCode);
  res.send(`${errorCode} | La page n'existe pas !`);
};
