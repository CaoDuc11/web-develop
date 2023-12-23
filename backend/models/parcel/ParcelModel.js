const { DataTypes } = require("sequelize");
const database = require("../../config/Database");
const Customer = require("../custumer/CustomerModel");
const Parcel = database.define(
  "parcels",
  {
    parcelId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    parcelContent: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    parcelType: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    weight: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    width: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    height: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    length: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    receiverId: {
      type: DataTypes.STRING,
      allowNull: false,

      references: {
        model: Customer,
        key: "customerId",
      },
    },

    senderId: {
      type: DataTypes.STRING,
      allowNull: false,

      references: {
        model: Customer,
        key: "customerId",
      },
    },
  },
  {
    timestamps: false,
  }
);

Parcel.sync({ alter: true })
  .then(() => {
    console.log("table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });
module.exports = Parcel;
