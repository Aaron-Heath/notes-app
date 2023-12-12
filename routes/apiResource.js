const express = require('express');
const fs = require('fs');
const Note = require('../models/note')

const DBPATH = './db/db.json';


const apiResource = express.Router();


// Add json parser
apiResource.use(express.json());

apiResource.get('/notes', (req,res)=> {
    // `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.
    const notes = require('../db/db.json');

    // Send JSON response
    res.json(notes);
});

apiResource.post('/notes', (req,res)=> {
    // `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you). -- done

    // read input
    let newNote = req.body; 
    console.log(newNote);
    
    // read db
    const notes = require('../db/db.json');

    // append new note
    notes.push(new Note(newNote.title, newNote.text).copy());

    fs.writeFile(DBPATH,JSON.stringify(notes),(err) => err ? console.log(err) : console.log('Database updated.'));




})

apiResource.delete('/notes/:id', (req,res)=> {
    // `DELETE /api/notes/:id` should receive a query parameter that contains the id of a note to delete. To delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

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