const express = require('express');

const getJourney = require('../controller/journey/JourneyController');
const JourneyRouter = express.Router();
JourneyRouter.get("/journey/:id", getJourney);

module.exports = JourneyRouter;