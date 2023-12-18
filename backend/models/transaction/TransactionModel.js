const { DataTypes } = require("sequelize");
const database = require("../../config/Database");
const Customer = require("../custumer/CustomerModel");
const Parcel = require("../parcel/ParcelModel");
const Distribution = require("../distribution/DistributionModel");
const Transaction = database.define(
  "transactions",
  {
    transactionId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    createAt: {
      type: DataTypes.DATE,
    },

    sendAt: {
      type: DataTypes.DATE,
    },

    receivedAt: {
      type: DataTypes.DATE,
    },

    feeId: {
      type: DataTypes.STRING,
      allowNull: false,
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

    distriReceived: {
      type: DataTypes.STRING,

      references: {
        model: Distribution,
        key: "distributionId",
      },
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
