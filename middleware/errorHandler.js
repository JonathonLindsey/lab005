const errorHandlerMiddleware = () => (err, req, res) => {
  console.log(`ErrorHandler : ${err}`);

  res.status(500).json(err);
};

module.exports = errorHandlerMiddleware;
