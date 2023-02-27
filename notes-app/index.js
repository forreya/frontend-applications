
const NotesModel = require('./src/models/notesModel');
const NotesView = require('./src/views/notesView');

const model = new NotesModel();

model.addNote('Go skating');

const view = new NotesView(model);

view.displayNotes()


