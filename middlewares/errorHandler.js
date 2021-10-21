const errorHandler = (err, req, res, next) => {
  let code = 500;
  let message = err;

  if (err.message == 'jwt must be provided') {
    code = 401;
    message = ['You need to login first!'];
  } else if (err.message == 'jwt malformed') {
    code = 401;
    message = ['Token not recognized!'];
  } 
  res.status(code).json({ message });
}

module.exports = errorHandler;