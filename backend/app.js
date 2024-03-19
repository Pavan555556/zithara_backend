// Import the Express module
const express = require('express');
const connectDB = require('./db');
const customerCreation = require('./routes/customerCreation');
const allCustomers = require('./routes/allCustomers');
const  getOneCustomer  = require('./routes/getOneCustomer');
const  updateCustomer  = require('./routes/updateCustomer');
const  deleteCustomer  = require('./routes/deleteCustomer');
const summaryRoute = require('./routes/summaryRoute')

// Create an instance of Express
const app = express();
connectDB();

// Middleware to parse JSON request bodies
app.use(express.json());

// Use customer routes
app.use('/api', customerCreation );
app.use('/api', allCustomers );
app.use('/api', getOneCustomer );
app.use('/api', updateCustomer );
app.use('/api', deleteCustomer );
app.use('/api', summaryRoute);

// Define a route handler for the root path
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Define the port number
const PORT = process.env.PORT || 3000;

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
