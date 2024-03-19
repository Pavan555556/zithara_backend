const express = require('express');
const router = express.Router();const updateCustomer = require('../controllers/updateCustomer');

const summaryCustomer = require('../controllers/summaryCustomer');

router.get('/summary', summaryCustomer);

module.exports = router;