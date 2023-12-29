const DataTypes = require("sequelize");
const database = require("../../config/Database");
const User = require("../user/UserModel");
const Collection = database.define(
  "collections",
  {
    collectionId: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },

    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    collectionName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    province: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    district: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    ward: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    hotline: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    managerId: {
      type: DataTypes.STRING,
      references: {
        model: User,
        key: "id",
      },
    },
  },
  {
    timestamps: false,
  }
);

Collection.sync({ alter: true })
  .then(() => {
    console.log("table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });
module.exports = Collection;
