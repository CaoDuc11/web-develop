const { validationResult } = require("express-validator");
const { where, Op } = require("sequelize");
const Customer = require("../../models/custumer/CustomerModel");
const Parcel = require("../../models/parcel/ParcelModel");
const Fee = require("../../models/fee/FeeModel");
const Transaction = require("../../models/transaction/TransactionModel");
const QueryTypes = require("sequelize");
const database = require("../../config/Database");
const Journey = require("../../models/journey/JourneyModel");
const Collection = require("../../models/collection/CollectionModel");
const Distribution = require("../../models/distribution/DistributionModel");

const CreateDelivery = async (req, res) => {
  const errors = validationResult(req);
  let errorsInfor = "";
  if (!errors.isEmpty) {
    errors.array().forEach((e) => {
      errorsInfor += e.param + " " + e.msg + "\n";
    });
    return res.status(400).json({ msg: errorsInfor });
  }
  const {
    senderId,
    senderName,
    senderPhone,
    senderAddress,
    senderProvince,
    senderDistrict,
    senderWard,

    receiverId,
    receiverName,
    receiverPhone,
    receiverAddress,
    receiverProvince,
    receiverDistrict,
    receiverWard,

    parcelId,
    parcelContent,
    parcelWeight,

    feeId,
    cod,
    feeMain,
    feeSub,
    gtgt,
    vat,
    other,

    journeyId1,
  } = req.body;

  try {
    await Customer.bulkCreate([
      {
        customerId: senderId,
        customerName: senderName,
        address: senderAddress,
        numberPhone: senderPhone,
        province: senderProvince,
        district: senderDistrict,
        ward: senderWard,
      },
      {
        customerId: receiverId,
        customerName: receiverName,
        address: receiverAddress,
        numberPhone: receiverPhone,
        province: receiverProvince,
        district: receiverDistrict,
        ward: receiverWard,
      },
    ]);
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }

  try {
    await Parcel.create({
      parcelId,
      parcelContent: parcelContent,
      parcelType: "Tài liệu",
      weight: parcelWeight,
      height: "0",
      length: "0",
      width: "0",
      senderId,
      receiverId,
    });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }

  try {
    await Fee.create({
      feeId,
      cod,
      feeMain,
      feeSub,
      gtgt,
      vat,
      other,
      total: "123.000",
    });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }

  try {
    await Journey.create({
      journeyId: journeyId1,
      createAt: new Date(),
      status: "1",
    });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }

  try {
    const distributionData = await Distribution.findOne({
      where: {
        distributionId: req.Workplace,
      },
    });
    await Transaction.create({
      parcelId,
      senderId,
      receiverId,
      status: "1",
      distriSend: req.Workplace,
      feeId,
      journeyId1,
      createAt: new Date(),
      collectionSend: distributionData.collectionId,
    });
    return res.status(201).json({ msg: "Tạo đơn hàng thành công" });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

const GetDelivery = async (req, res) => {
  try {
    const sql =
      "SELECT DISTINCT transactions.transactionId as transactionId, transactions.status as status, sender.customerName as senderName, sender.address as senderAddress, sender.numberPhone as senderPhone," +
      " receiver.customerName as receiverName, receiver.address as receiverAddress, receiver.numberPhone as receiverPhone," +
      " parcels.width as parcelWidth, parcels.height as parcelHeight, parcels.length as parcelLength, parcels.parcelContent as parcelContent, parcels.parcelType as parcelType, parcels.weight as parcelWeight," +
      "  CONCAT(DATE_FORMAT(journey1.createAt, '%d/%m/%Y'), ' - ', DATE_FORMAT(journey1.createAt, '%H:%i')) as dateTime,  CONCAT(DATE_FORMAT(journey1.sendFromDistribution1At, '%d/%m/%Y'), ' - ', DATE_FORMAT(journey1.sendFromDistribution1At, '%H:%i')) as sendFromDistribution1At,  CONCAT(DATE_FORMAT(journey1.collectionTime1, '%d/%m/%Y'), ' - ', DATE_FORMAT(journey1.collectionTime1, '%H:%i')) as collectionTime1, CONCAT(DATE_FORMAT(journey1.sendFromCollection1At, '%d/%m/%Y'), ' - ', DATE_FORMAT(journey1.sendFromCollection1At, '%H:%i')) as sendFromCollection1At, CONCAT(DATE_FORMAT(journey1.collectionTime2, '%d/%m/%Y'), ' - ', DATE_FORMAT(journey1.collectionTime2, '%H:%i')) as collectionTime2, journey1.status as journeyStatus," +
      " distributionSend.distributionName as distriSend, distributionSend.collectionName as collecSendName," +
      " fees.feeMain as feeMain, fees.feeSub as feeSub, fees.cod as cod, fees.vat as vat, fees.gtgt as gtgt, fees.other as other, fees.total as total FROM transactions" +
      " INNER JOIN customers as sender ON transactions.senderId = sender.customerId INNER JOIN customers as receiver ON transactions.receiverId = receiver.customerId JOIN parcels ON transactions.parcelId = parcels.parcelId INNER JOIN fees ON transactions.feeId = fees.feeId INNER JOIN journeys as journey1 ON transactions.journeyId1 = journey1.journeyId INNER JOIN distributions as distributionSend ON transactions.distriSend = distributionSend.distributionId WHERE transactions.status = :status AND transactions.distriSend =  :employee_place ORDER BY transactions.createAt DESC";
    const data = await database.query(sql, {
      replacements: {
        status: req.params.status,
        employee_place: req.Workplace,
      },
      type: QueryTypes.SELECT,
    });

    return res.status(200).json(data[0]);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const GetDeliveryShip = async (req, res) => {
  try {
    const sql1 =
      "SELECT DISTINCT transactions.transactionId as transactionId, transactions.status as status, sender.customerName as senderName, sender.address as senderAddress, sender.numberPhone as senderPhone," +
      " receiver.customerName as receiverName, receiver.address as receiverAddress, receiver.numberPhone as receiverPhone," +
      " parcels.width as parcelWidth, parcels.height as parcelHeight, parcels.length as parcelLength, parcels.parcelContent as parcelContent, parcels.parcelType as parcelType, parcels.weight as parcelWeight," +
      " journey1.status as journeyStatus," +
      " fees.feeMain as feeMain, fees.feeSub as feeSub, fees.cod as cod, fees.vat as vat, fees.gtgt as gtgt, fees.other as other, fees.total as total FROM transactions" +
      " INNER JOIN customers as sender ON transactions.senderId = sender.customerId INNER JOIN customers as receiver ON transactions.receiverId = receiver.customerId JOIN parcels ON transactions.parcelId = parcels.parcelId INNER JOIN fees ON transactions.feeId = fees.feeId INNER JOIN journeys as journey1 ON transactions.journeyId1 = journey1.journeyId INNER JOIN distributions as distributionSend ON transactions.distriSend = distributionSend.distributionId WHERE transactions.distriReceived =  :employee_place ORDER BY transactions.createAt DESC";
    const data1 = await database.query(sql1, {
      replacements: {
        employee_place: req.Workplace,
      },
      type: QueryTypes.SELECT,
    });
    return res.status(200).json(data1[0]);
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

const DeleteDelivery = async (req, res) => {
  try {
    const transaction = await Transaction.findOne({
      where: {
        transactionId: req.params.id,
      },
    });
    if (!transaction) {
      return res.status(404).json({ msg: "Đơn hàng không tồn tại" });
    }
    await Transaction.destroy({
      where: {
        transactionId: req.params.id,
      },
    });

    await Fee.destroy({
      where: {
        feeId: transaction.feeId,
      },
    });

    await Parcel.destroy({
      where: {
        parcelId: transaction.parcelId,
      },
    });

    await Journey.destroy({
      where: {
        journeyId: transaction.journeyId1,
      },
    });

    await Customer.destroy({
      where: {
        [Op.or]: [
          { customerId: transaction.senderId },
          { customerId: transaction.receiverId },
        ],
      },
    });

    res.status(200).json({ msg: "Delivery Deleted" });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

const UpdateDelivery = async (req, res) => {
  try {
    const transaction = await Transaction.findOne({
      where: {
        transactionId: req.params.id,
      },
    });
    if (!transaction) {
      return res.status(404).json({ msg: "Không tồn tại đơn hàng " });
    }
    await Transaction.update(
      {
        status: req.body.status,
      },
      {
        where: {
          transactionId: req.params.id,
        },
      }
    );
    if (req.body.status === "2") {
      await Journey.update(
        {
          status: "2",
          sendFromDistribution1At: new Date(),
        },
        {
          where: {
            journeyId: transaction.journeyId1,
          },
        }
      );
    }
    return res.status(200).json({ msg: "Cập nhật đơn thành công" });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

const UpdateJourneyShip = async (req, res) => {
  try {
    const transaction = await Transaction.findOne({
      where: {
        transactionId: req.params.id,
      },
    });
    if (!transaction) {
      return res.status(404).json({ msg: "Không tồn tại đơn hàng " });
    }
    if (req.body.status === "6") {
      await Journey.update(
        {
          status: "7",
          distributionTime2: new Date(),
        },
        {
          where: {
            journeyId: transaction.journeyId1,
          },
        }
      );
    } else if (req.body.status === "7") {
      await Journey.update(
        {
          status: "8",
          sendFromDistribution2At: new Date(),
        },
        {
          where: {
            journeyId: transaction.journeyId1,
          },
        }
      );
    } else if (req.body.status === "8") {
      await Transaction.update(
        {
          status: req.body.confirm === "success" ? "3" : "4",
        },
        {
          where: {
            journeyId1: transaction.journeyId1,
          },
        }
      );
      await Journey.update(
        {
          status: req.body.confirm === "success" ? "9" : "0",
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
  CreateDelivery,
  GetDelivery,
  DeleteDelivery,
  UpdateDelivery,
  GetDeliveryShip,
  UpdateJourneyShip,
};
