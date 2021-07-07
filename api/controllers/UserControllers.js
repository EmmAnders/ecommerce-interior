const User = require("../models/User");
const encrypt = require("../Encrypt.js");

const whoami = (req, res) => {
  res.json(req.session.user || null);
};

const register = async (req, res) => {
  console.log(req.body);
  try {
    //Checking if user exists
    let userExists = await User.exists({ email: req.body.email });
    if (userExists)
      return res
        .status(400)
        .json({ error: "User with that email already exists." });

    //Encryption line
    req.body.password = encrypt(req.body.password);

    const newUser = await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
    });

    //Making sure no passwords return to front end.
    newUser.password = undefined;

    //Initiating session
    req.session.user = newUser;

    return res.status(200).json({ message: "New user created", user: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server error Occured");
  }
};

const login = async (req, res) => {
  let userExists = await User.exists({ email: req.body.email });
  if (userExists) {
    let user = await User.findOne({ email: req.body.email }).exec();

    if (user.password === encrypt(req.body.password)) {
      req.session.user = user;
      req.session.user.password = undefined;
      user.password = undefined;
      return res.json({ message: "Login successful", currentUser: user });
    }
  }

  return res.status(401).json({ error: "Bad credentials" });
};

const logout = (req, res) => {
  if (req.session.user) {
    delete req.session.user;
    return res.json({ message: "Logout successful" });
  }

  return res.json({ error: "Already logged out" });
};
module.exports = {
  register,
  login,
  logout,
  whoami,
};
