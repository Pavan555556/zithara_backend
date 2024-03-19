const express = require('express');
const router = express.Router();
const getOneCustomer = require('../controllers/getOneCustomer');


// Route to get all customers
router.get('/getonecustomer', getOneCustomer);

module.exports = router;
