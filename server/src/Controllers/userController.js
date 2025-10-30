const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../Models/userModel");
const Local = require("../Environment/env");

const Secret_key = Local.Secret_Key;

const ServerErrorResponse = async (res, err) => {
  await Video.findAll();
  return res.status(500).json({ message: `Something Went Wrong! ${err}  ` });
};

const userLogin = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ where: { userName: userName } });
    if (!user) {
      return res.status(404).json({ message: "User doesn't exist" });
    } else {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid password" });
      } else {
        const token = jwt.sign({ uuid: user.uuid }, Secret_key, {expiresIn: '1d'}); 

        return res.status(200).json({ message: "Login successful", token, user});
      }
    }
  } catch (err) {
    return ServerErrorResponse(res, err);
  }
};

module.exports = {userLogin}