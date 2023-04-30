const colorMiddleware = () => {
    const supportedColors = [
        'red',
        'green',
        'blue'
        
    ];
    return (req, res, next) => {
        console.log(`SupportedColor: input color = ${req.body.color}`);
        
        if (!req.body.color) {
            req.body.supportedColor = false;
        } else if (supportedColors.includes(req.body.color)) {
            req.body.supportedColor = true;
        } else {
            req.body.supportedColor = false;
        }

        next();

    }
}

module.exports = colorMiddleware;
