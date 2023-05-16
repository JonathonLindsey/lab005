function colorToHexMiddleware(req, _res, next) {
  if (req.body && req.body.color) {
      const colorMap = {
        red: "#ff0000",
        green: "#00ff00",
        blue: "#0000ff",
      };
  
      const color = req.body.color.toLowerCase();
  
      if (colorMap.hasOwnProperty(color)) {
        req.body.hexColor = colorMap[color];
      }
    }
  
    next();
  }
  

module.exports = colorToHexMiddleware;
