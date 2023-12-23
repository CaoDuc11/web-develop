const DataTypes = require("sequelize");
const database = require("../../config/Database");
const Fee = database.define(
  "fees",
  {
    feeId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    feeMain: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    feeSub: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    cod: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    vat: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    gtgt: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    other: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    total: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

Fee.sync({ alter: true })
  .then(() => {
    console.log("table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });
module.exports = Fee;
