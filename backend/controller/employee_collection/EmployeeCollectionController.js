const QueryTypes = require("sequelize");
const database = require("../../config/Database");
const Journey = require("../../models/journey/JourneyModel");
const Transaction = require("../../models/transaction/TransactionModel");

const GetDeliveryData = async (req, res) => {
  try {
    const sql1 =
      "SELECT DISTINCT transactions.transactionId as transactionId, transactions.status as status, transactions.collectionReceived as collectionId, sender.customerName as senderName, sender.address as senderAddress, sender.numberPhone as senderPhone," +
      " receiver.customerName as receiverName, receiver.address as receiverAddress, receiver.numberPhone as receiverPhone," +
      " parcels.width as parcelWidth, parcels.height as parcelHeight, parcels.length as parcelLength, parcels.parcelContent as parcelContent, parcels.parcelType as parcelType, parcels.weight as parcelWeight," +
      " journey1.status as journeyStatus," +
      " fees.feeMain as feeMain, fees.feeSub as feeSub, fees.cod as cod, fees.vat as vat, fees.gtgt as gtgt, fees.other as other, fees.total as total FROM transactions" +
      " INNER JOIN customers as sender ON transactions.senderId = sender.customerId INNER JOIN customers as receiver ON transactions.receiverId = receiver.customerId JOIN parcels ON transactions.parcelId = parcels.parcelId INNER JOIN fees ON transactions.feeId = fees.feeId INNER JOIN journeys as journey1 ON transactions.journeyId1 = journey1.journeyId INNER JOIN distributions as distributionSend ON transactions.distriSend = distributionSend.distributionId WHERE transactions.status = :status AND transactions.collectionSend =  :employee_place ORDER BY transactions.createAt DESC";
    const data1 = await database.query(sql1, {
      replacements: {
        status: req.params.status,
        employee_place: req.Workplace,
      },
      type: QueryTypes.SELECT,
    });

    const sql2 = "SELECT collectionName, collectionId FROM collections";
    const data2 = await database.query(sql2, {
      replacements: {},
      type: QueryTypes.SELECT,
    });
    return res
      .status(200)
      .json({ deliveries: data1[0], collections: data2[0] });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

const UpdateJourney = async (req, res) => {
  try {
    const transaction = await Transaction.findOne({
      where: {
        transactionId: req.params.id,
      },
    });
    if (!transaction) {
      return res.status(404).json({ msg: "Không tồn tại đơn hàng " });
    }
    if (req.body.status === "2") {
      await Journey.update(
        {
          status: "3",
          collectionTime1: new Date(),
        },
        {
          where: {
            journeyId: transaction.journeyId1,
          },
        }
      );
    } else if (req.body.status === "3") {
      await Transaction.update(
        {
          collectionReceived: req.body.collectionId,
        },
        {
          where: {
            transactionId: req.params.id,
          },
        }
      );
      await Journey.update(
        {
          status: "4",
          sendFromCollection1At: new Date(),
        },
        {
          where: {
            journeyId: transaction.journeyId1,
          },
        }
      );
    }
    return res.status(200).json({ msg: "Cập nhật đơn thành công" });
  } catch (errior) {
    return res.status(400).json({ msg: error.message });
  }
};

module.exports = {
  GetDeliveryData,
  UpdateJourney,
};
