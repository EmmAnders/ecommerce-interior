const User = require("../models/User");

module.exports = async function (req, res, next) {
  try {
   
    if (req.session.user.role === 0 || null || undefined) {
      return res.status(403).json({
        error: "Admin resources access denied",
      });
    }

    next();
  } catch (error) {
    console.log(error);
 
    res.status(500).send("Server Error");
  }
};
