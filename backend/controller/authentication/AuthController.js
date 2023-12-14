const { body, validationResult } = require("express-validator");
const { where } = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/user/UserModel");

const Login = async (req, res) => {
  const errors = validationResult(req);
  let errorsInfor = "";
  if (!errors.isEmpty) {
    errors.array().forEach((e) => {
      errorsInfor += e.param + " " + e.msg + "\n";
    });
    return res.status(400).json({ msg: errorsInfor });
  }

  console.log(req.body);
  const existUser = await User.findOne({
    where: {
      email: req.body.email,
    },
  });
  console.log(existUser);
  if (!existUser) {
    return res.status(400).json({ msg: "Không tồn tại tài khoản" });
  }
  const match = await bcrypt.compare(req.body.password, existUser.password);
  if (!match) {
    console.log("abcfsfs");
    return res.status(400).json({ msg: "Mật khẩu đăng nhập sai" });
  }
  const token = jwt.sign(
    {
      id: existUser.id,
      email: existUser.email,
      position: existUser.position,
    },
    "jwt12345678",
    { expiresIn: "5h" }
  );
  res.cookie("access_token", token, { httpOnly: true });
  const email = existUser.email;
  const id = existUser.id;
  const username = existUser.username;
  const position = existUser.position;
  return res.status(200).json({ id, email, username, position });
};

module.exports = Login;
