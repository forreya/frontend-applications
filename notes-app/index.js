
const NotesModel = require('./src/models/notesModel');
const NotesView = require('./src/views/notesView');

const model = new NotesModel();

const view = new NotesView(model);


