 const jwt = require("jsonwebtoken");

async function identifyUserController(req, res ,next) {
     const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        msg: "Un Authorized access , token required",
      });
    }

    let decoded = null;

    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      return res.status(401).json({
        msg: "Un Authorized access , invalid token",
      });
    }

    req.user = decoded;
    next();

}

module.exports = { identifyUserController };