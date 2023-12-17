const { validationResult } = require("express-validator");
const { where, Op } = require("sequelize");
const Customer = require("../../models/custumer/CustomerModel");
const Parcel = require("../../models/parcel/ParcelModel");
const Fee = require("../../models/fee/FeeModel");
const Transaction = require("../../models/transaction/TransactionModel");
const QueryTypes = require("sequelize");
const database = require("../../config/Database");

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
    await Transaction.create({
      parcelId,
      senderId,
      receiverId,
      createAt: new Date(),
      status: "1",
      distriSend: req.Workplace,
      feeId,
    });

    return res.status(201).json({ msg: "Tạo đơn hàng thành công" });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

const GetDelivery = async (req, res) => {
  try {
    const sql =
      "SELECT DISTINCT transactions.transactionId as transactionId, sender.customerName as senderName, sender.address as senderAddress, sender.numberPhone as senderPhone," +
      " receiver.customerName as receiverName, receiver.address as receiverAddress, receiver.numberPhone as receiverPhone," +
      " parcels.width as parcelWidth, parcels.height as parcelHeight, parcels.length as parcelLength, parcels.parcelContent as parcelContent, parcels.parcelType as parcelType, parcels.weight as parcelWeight," +
      " fees.feeMain as feeMain, fees.feeSub as feeSub, fees.cod as cod, fees.vat as vat, fees.gtgt as gtgt, fees.other as other, fees.total as total,  CONCAT(DATE_FORMAT(transactions.createAt, '%d/%m/%Y'), ' - ', DATE_FORMAT(transactions.createAt, '%H:%i')) as dateTime FROM transactions" +
      " INNER JOIN customers as sender ON transactions.senderId = sender.customerId INNER JOIN customers as receiver ON transactions.receiverId = receiver.customerId JOIN parcels ON transactions.parcelId = parcels.parcelId INNER JOIN fees ON transactions.feeId = fees.feeId WHERE transactions.status = '1' ORDER BY transactions.createAt DESC";
    const data = await database.query(sql, {
      type: QueryTypes.SELECT,
    });
    return res.status(200).json(data[0]);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
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

module.exports = { CreateDelivery, GetDelivery, DeleteDelivery };
