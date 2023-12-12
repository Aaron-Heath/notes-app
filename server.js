// Import dependencies
const express = require('express');
const fs = require('fs');
const notesResouce = require('./routes/apiResource');

// Create app
const PORT = 3001;
const app = express();

// Install Middleware
app.use(express.json());
app.use(express.static('public'));

// Import routes
app.use('/api', notesResouce);


app.get('/', (req,res)=> {
    // `GET *` should return the `index.html` file.
})

app.get('/notes', (req,res)=> {
    // `GET /notes` should return the `notes.html` file.

})


// Begin app
app.listen(PORT, ()=> {
    console.log(`Server listening to requests on port ${PORT}.`);
})
