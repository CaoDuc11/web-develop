const { validationResult } = require("express-validator");
const User = require("../../models/user/UserModel");
const bcrypt = require("bcrypt");
const { where, Op } = require("sequelize");
const QueryTypes = require("sequelize");
const database = require("../../config/Database");
const Collection = require("../../models/collection/CollectionModel");
const GetAdminUser = async (req, res) => {
  try {
    const data = await User.findAll({
      attributes: [
        "id",
        "fullname",
        "email",
        "username",
        "workplace",
        "position",
      ],
      where: {
        [Op.or]: [
          {
            position: "admin_distribution",
          },
          {
            position: "admin_collection",
          },
        ],
      },
    });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const GetSystemList = async (req, res) => {
  try {
    const sql1 =
      "SELECT DISTINCT distributions.distributionId as distributionId, distributions.distributionName as systemName, distributions.collectionName as collectionName, distributions.address as address," +
      " distributions.province as province, distributions.district as district, distributions.ward as ward, distributions.hotline as hotline," +
      "users.fullname as adminName " +
      "FROM distributions " +
      "INNER JOIN users ON distributions.managerId = users.id";
    const data1 = await database.query(sql1, {
      replacements: {},
      type: QueryTypes.SELECT,
    });
    const sql2 =
      "SELECT DISTINCT collections.collectionId as collectionId, collections.collectionName as systemName, collections.address as address, " +
      " collections.province as province, collections.district as district, collections.ward as ward,collections.hotline as hotline, " +
      "users.fullname as adminName " +
      "FROM collections " +
      "INNER JOIN users ON collections.managerId = users.id";
    const data2 = await database.query(sql2, {
      replacements: {},
      type: QueryTypes.SELECT,
    });
    return res
      .status(200)
      .json({ distributions: data1[0], collections: data2[0] });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports = { GetAdminUser, GetSystemList };
