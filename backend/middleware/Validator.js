const { body, check } = require("express-validator");

const checkLogin = [
  check("email").notEmpty().withMessage("Yêu cầu nhập email"),
  body("email").isEmail().withMessage("Yêu cầu nhập đúng định dạng"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Mật khẩu có it nhất 6 ký tự"),
];

module.exports = checkLogin;
