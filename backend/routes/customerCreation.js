// routes/customerRoutes.js

const express = require('express');
const router = express.Router();
const Customer = require('../models/customers');

// Route for creating a new customer
router.post('/customers', async (req, res) => {
    try {
        const cust = req.body;
        const cust1 = await Customer.find({email:cust.email});
        console.log(cust1);
        if(cust1.length > 0) {
          res.status(201).json('User already exists');
        }
        else{
        const customer = await Customer.create(req.body);
        res.status(201).json(customer);
        }
      } catch (err) {
        res.status(400).json({ error: err.message });
      }   
});

module.exports = router;
