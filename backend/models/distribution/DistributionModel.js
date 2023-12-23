const DataTypes = require("sequelize");
const database = require("../../config/Database");
const User = require("../user/UserModel");
const Collection = require("../collection/CollectionModel");
const Distribution = database.define(
  "distributions",
  {
    distributionId: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },

    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    distributionName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    ward: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    managerId: {
      type: DataTypes.STRING,
      allowNull: false,

      references: {
        model: User,
        key: "id",
      },
    },

    collectionId: {
      type: DataTypes.STRING,
      allowNull: false,

      references: {
        model: Collection,
        key: "collectionId",
      },
    },
  },
  {
    timestamps: false,
  }
);

Distribution.sync({ alter: true })
  .then(() => {
    console.log("table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });
module.exports = Distribution;
