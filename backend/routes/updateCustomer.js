// Route to update a customer by ID
const express = require('express');
const router = express.Router();
const updateCustomer = require('../controllers/updateCustomer');

router.put('/customers/:id', updateCustomer);

module.exports = router;