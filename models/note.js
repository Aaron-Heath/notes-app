const {v4 : uuidv4, stringify} = require('uuid');

class Note {
    #title;
    #text;
    #uuid;

   
    // Constructor generates uuid when instantiated
    constructor(title = null, text = null, uuid = null) {
        this.#title = title;
        this.#text = text;

        // If a uuid is provided (read from db), asign that value. Else generate new.
        uuid === null ? this.#uuid = uuidv4() : this.#uuid = uuid;
    }

    // Getters and Setters
    getTitle() {
        return this.#title;
    }

    setTitle(title) {
        this.#title = title;
    }

    getText() {
        return this.#text;
    }

    setText(text) {
        this.#text = text
    }

    getUuid() {
        return this.#uuid;
    }

    // Intentionally leaving out set uuid. It is either generated or assigned when the variable is assigned.

    // return a deep copy of the object traits
    copy() {
        return {
            title: this.#title,
            text: this.#text,
            id: this.#uuid
        }
    }


}


module.exports = Note;