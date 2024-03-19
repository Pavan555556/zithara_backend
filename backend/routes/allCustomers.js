const express = require('express');
const router = express.Router();
const getAllCustomers = require('../controllers/getAllCustomers');

// Route to get all customers
router.get('/getcustomers', getAllCustomers);

module.exports = router;
