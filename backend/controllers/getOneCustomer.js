const Customer = require('../models/customers');

const getOneCustomer = async (req, res) => {
    try {
      const customers = await Customer.findOne(req.email);
      res.status(200).json(customers);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  module.exports = getOneCustomer;

