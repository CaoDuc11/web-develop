const { DataTypes } = require("sequelize");
const database = require("../../config/Database");
const Journey = database.define(
  "journeys",
  {
    journeyId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    createAt: {
      type: DataTypes.DATE,
    },

    sendFromDistribution1At: {
      type: DataTypes.DATE,
    },

    collectionTime1: {
      type: DataTypes.DATE,
    },

    sendFromCollection1At: {
      type: DataTypes.DATE,
    },

    collectionTime2: {
      type: DataTypes.DATE,
    },

    sendFromCollection2At: {
      type: DataTypes.DATE,
    },

    distributionTime2: {
      type: DataTypes.DATE,
    },

    sendFromDistribution2At: {
      type: DataTypes.DATE,
    },

    distributionTime1: {
      type: DataTypes.DATE,
    },

    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

Journey.sync({ alter: true })
  .then(() => {
    console.log("table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });
module.exports = Journey;
