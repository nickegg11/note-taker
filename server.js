// server.js
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for parsing application/json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static middleware for serving assets in the public folder
app.use(express.static('public'));

// Use apiRoutes for handling data and htmlRoutes for serving HTML pages
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Start the server on the specified PORT
app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`));
