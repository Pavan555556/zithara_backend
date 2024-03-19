const Customer = require('../models/customers');



// Controller function to update or create a customer by ID
const updateCustomer = async (req, res) => {
  const customerId = req.params.id;
  const { customerName, email, revenue, profit, orderCount } = req.body;

  try {
    // Try to find the customer by ID
    let updatedCustomer = await Customer.findByIdAndUpdate(
      customerId,
      { customerName, email, revenue, profit, orderCount, updatedAt:Date.now() }
    );

    // If customer is not found, create a new one
    if (!updatedCustomer) {
      updatedCustomer = await Customer.create({
        customerName,
        email,
        revenue,
        profit,
        orderCount
      });
    }

    res.status(200).json(updatedCustomer);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = updateCustomer;