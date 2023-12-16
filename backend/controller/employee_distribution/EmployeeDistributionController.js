const { validationResult } = require("express-validator");
const { where, Op } = require("sequelize");
const Customer = require("../../models/custumer/CustomerModel");
const Parcel = require("../../models/parcel/ParcelModel");
const Fee = require("../../models/fee/FeeModel");
const Transaction = require("../../models/transaction/TransactionModel");

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
  console.log(req.body);

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

module.exports = { CreateDelivery };
