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

const getJourney = async (req, res) => {
    try {
        const transaction = await Transaction.findOne({
            where: {
                transactionId: req.params.id,
            },
        });
        if (!transaction) {
            return res.status(404).json({ msg: "Không tồn tại đơn hàng " });
        }
        const journey = await Journey.findOne({
            where: {
                journeyId: transaction.journeyId1,
            }
        });
        if (!journey) {
            return res.status(404).json({ msg: "Không tồn tại đơn hàng " });
        }
        return res.status(200).json(journey);
    } catch (error) {
        return res.status(400).json({ msg: error.message });
    }
}

module.exports = getJourney;