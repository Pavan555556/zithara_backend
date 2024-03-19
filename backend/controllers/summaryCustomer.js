const Customer = require('../models/customers');

// Controller function to get summary information
const getSummary = async (req, res) => {
  try {
    // Total number of customers
    const totalCustomers = await Customer.countDocuments();

    // Total order count
    const totalOrderCount = await Customer.aggregate([
      {
        $group: {
          _id: null,
          totalOrders: { $sum: '$orderCount' }
        }
      }
    ]);

    // Total revenue
    const totalRevenue = await Customer.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: '$revenue' }
        }
      }
    ]);

    // Calculate average order count per customer
    const avgOrderPerCustomer = totalOrderCount.length > 0 ? totalOrderCount[0].totalOrders / totalCustomers : 0;

    res.status(200).json({
      totalCustomers,
      totalOrderCount: totalOrderCount.length > 0 ? totalOrderCount[0].totalOrders : 0,
      totalRevenue: totalRevenue.length > 0 ? totalRevenue[0].totalRevenue : 0,
      avgOrderPerCustomer
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};


module.exports = getSummary;