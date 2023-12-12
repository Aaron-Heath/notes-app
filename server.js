// Import dependencies
const express = require('express');
const fs = require('fs');
const notesResouce = require('./routes/notesResource');

// Create app
const PORT = 3001;
const app = express();

// Install Middleware
app.use(express.json());
app.use(express.static('public'));

// Import routes
app.use('/notes', notesResouce);


// Begin app
app.listen(PORT, ()=> {
    console.log(`Server listening to requests on port ${PORT}.`);
})
