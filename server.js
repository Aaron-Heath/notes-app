// Import dependencies
const express = require('express');
const fs = require('fs');

// Create app
const PORT = 3001;
const app = express();

// Install Middleware
app.use(express.json());
app.use(express.static('public'));

// Import routes


// Begin app
app.listen(PORT, ()=> {
    console.log(`Server listening to requests on port ${PORT}.`);
})
