// server.js
require ('dotenv').config();
const express = require('express');
const app = express();

//Middleware
app.use(express.json());

// Load Config
const PORT = process.env.PORT || 3000;
const BASE_URI = process.env.BASE_URI || '/api/v1';

// Import Routes
 const apiRoutes = require('./scr/routes/apiRoutes');
 app.use(BASE_URI, apiRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Base URI: http://localhost:${PORT}${BASE_URI}`);
});
