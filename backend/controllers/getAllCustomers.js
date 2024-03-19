const Customer = require('../models/customers');

// Controller function to get all customers
const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = getAllCustomers;