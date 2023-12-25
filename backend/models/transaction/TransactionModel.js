const { DataTypes } = require("sequelize");
const database = require("../../config/Database");
const Customer = require("../custumer/CustomerModel");
const Parcel = require("../parcel/ParcelModel");
const Distribution = require("../distribution/DistributionModel");
const Fee = require("../fee/FeeModel");
const Journey = require("../journey/JourneyModel");
const Collection = require("../collection/CollectionModel");
const Transaction = database.define(
  "transactions",
  {
    transactionId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    feeId: {
      type: DataTypes.STRING,
      allowNull: false,

      references: {
        model: Fee,
        key: "feeId",
      },
    },

    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    parcelId: {
      type: DataTypes.STRING,
      allowNull: false,

      references: {
        model: Parcel,
        key: "parcelId",
      },
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

    distriSend: {
      type: DataTypes.STRING,
      allowNull: false,

      references: {
        model: Distribution,
        key: "distributionId",
      },
    },

    collectionSend: {
      type: DataTypes.STRING,

      references: {
        model: Collection,
        key: "collectionId",
      },
    },

    distriReceived: {
      type: DataTypes.STRING,
      references: {
        model: Distribution,
        key: "distributionId",
      },
    },

    collectionReceived: {
      type: DataTypes.STRING,

      references: {
        model: Collection,
        key: "collectionId",
      },
    },

    journeyId1: {
      type: DataTypes.STRING,
      references: {
        model: Journey,
        key: "journeyId",
      },
    },

    createAt: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: false,
  }
);

Transaction.sync({ alter: true })
  .then(() => {
    console.log("table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });
module.exports = Transaction;
