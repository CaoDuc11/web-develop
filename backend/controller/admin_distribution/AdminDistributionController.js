const { validationResult } = require("express-validator");
const User = require("../../models/user/UserModel");
const bcrypt = require("bcrypt");
const { where, Op } = require("sequelize");

const CreateEmployee = async (req, res) => {
  const errors = validationResult(req);
  let errorsInfor = "";
  if (!errors.isEmpty) {
    errors.array().forEach((e) => {
      errorsInfor += e.param + " " + e.msg + "\n";
    });
    return res.status(400).json({ msg: errorsInfor });
  }
  const { fullname, username, email, password, password_confirm } = req.body;
  try {
    const existUsers = await User.findAndCountAll({
      where: {
        [Op.or]: [{ username: username }, { email: email }],
      },
    });
    const employeeDistributions = await User.findAndCountAll({
      where: {
        position: "employee_distribution",
      },
    });
    if (existUsers.count != 0) {
      return res.status(400).json({ msg: "Đã tồn tài tài khoản" });
    }
    if (password !== password_confirm) {
      return res.status(400).json({ msg: "Xác nhận lại mật khẩu" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    await User.create({
      id: "DDDE" + (employeeDistributions.count + 1).toString(),
      position: "employee_distribution",
      fullname: fullname,
      username: username,
      email: email,
      password: hashPassword,
      workplace: req.Workplace,
    });
    return res.status(201).json({ msg: "Tạo tài khoản thành công" });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

const GetEmployees = async (req, res) => {
  try {
    const data = await User.findAll({
      attributes: ["id", "fullname", "email", "username"],
      where: {
        [Op.and]: [
          {
            workplace: req.Workplace,
            position: "employee_distribution",
          },
        ],
      },
    });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const DeleteEmployee = async (req, res) => {
  try {
    const employee = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!employee) {
      return res.status(404).json({ msg: "Nhân viên không tồn tại" });
    }
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "User Deleted" });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

module.exports = {
  CreateEmployee,
  GetEmployees,
  DeleteEmployee,
};
