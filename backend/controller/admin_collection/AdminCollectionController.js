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
    const employeeCollections = await User.findAndCountAll({
      where: {
        position: "employee_collection",
        workplace: `${req.Workplace}`,
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
      id: `${req.Workplace}-${employeeCollections.count + 1}`,
      position: "employee_collection",
      fullname: fullname,
      username: username,
      email: email,
      password: hashPassword,
      workplace: req.Workplace,
    });
    return res
      .status(201)
      .json({ id: `${req.Workplace}-${employeeCollections.count + 1}` });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

const GetEmployees = async (req, res) => {
  try {
    const data = await User.findAll({
      attributes: ["id", "fullname", "email", "username", "position"],
      where: {
        [Op.and]: [
          {
            workplace: req.Workplace,
            position: "employee_collection",
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

const UpdateEmpolyee = async (req, res) => {
  try {
    const employee = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!employee) {
      return res.status(404).json({ msg: "Nhân viên không tồn tại" });
    }
    if (req.body.password !== req.body.password_confirm) {
      return res.status(400).json({ msg: "Xác nhận lại mật khẩu" });
    }
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    await User.update(
      {
        email: req.body.email,
        username: req.body.username,
        password: hashPassword,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    return res.status(200).json({ msg: "Cập nhật người dùng thành công!" });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

module.exports = {
  CreateEmployee,
  GetEmployees,
  DeleteEmployee,
  UpdateEmpolyee,
};
