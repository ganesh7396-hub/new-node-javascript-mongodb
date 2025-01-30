const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.JWT_SECRET || "yourSecretKey";

// Middleware to verify token
const authenticate = (req, res, next) => {
  const token = req.header("x-auth-token");
  
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    // Verify the token

    console.log("Token", token, SECRET_KEY);
    const decoded = jwt.verify(token, SECRET_KEY);
    console.log("Decoded", decoded);

    // Attach user info to request object
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token" });
  }
};

module.exports = authenticate;
