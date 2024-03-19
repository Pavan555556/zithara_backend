// Route to update a customer by ID
const express = require('express');
const router = express.Router();
const deleteCustomer = require('../controllers/deleteCustomer');

// Route to delete a customer by ID
router.delete('/customers/:id', deleteCustomer);

module.exports = router;

