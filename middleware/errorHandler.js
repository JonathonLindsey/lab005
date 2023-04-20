const errorHandlerMiddleware = () => {
    return (err, req, res, next) => {
        console.log(`ErrorHandler : ${err}`);

        res.status(500).json(err);
    };
};

module.exports = errorHandlerMiddleware;
