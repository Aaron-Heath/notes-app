const express = require('express');
const fs = require('fs');


const notesResource = express.Router();


// Add json parser
notesResource.use(express.json());

notesResource.get('/', (req,res)=> {
    console.log(`${req.method} request heard.`);
});


module.exports = notesResource;