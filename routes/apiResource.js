const express = require('express');
const fs = require('fs');
const Note = require('../models/note')

const DBPATH = './db/db.json';


const apiResource = express.Router();


// Add json parser
apiResource.use(express.json());

apiResource.get('/notes', (req,res)=> {
    const notes = require('../db/db.json');

    // Send JSON response
    res.json(notes);
});

apiResource.post('/notes', (req,res)=> {

    // read input
    let newNote = req.body; 
    console.log(newNote);
    
    // read db
    const notes = require('../db/db.json');

    // append new note
    notes.push(new Note(newNote.title, newNote.text).copy());

    fs.writeFile(DBPATH,JSON.stringify(notes),(err) => err ? console.log(err) : console.log('Database updated.'));
    res.sendStatus(200);




});

apiResource.delete('/notes/:id', (req,res)=> {
    const notes = require('../db/db.json');
    const id = req.params.id;
    console.log(id);
    let deleted = false;

    for(let i = 0; i < notes.length; i ++) {
        // Iterate over notes and search for id
        if(notes[i].id === id) {
            // if id is found, delete record.
            let removed = notes.splice(i,i);
            console.log(removed);
            deleted = true;

            break;
        }
    }
    // Only write new file is successfully deleted. Else return error
    if(deleted) {
        fs.writeFile(DBPATH,JSON.stringify(notes),(err) => err ? console.log(err) : console.log('Database updated.'));
        res.sendStatus(200);
    } else {
        res.sendStatus(400);
    }
    
    


})


module.exports = apiResource;