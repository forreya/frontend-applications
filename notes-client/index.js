
const NotesModel = require('./src/models/notesModel');
const NotesView = require('./src/views/notesView');
const NotesClient = require('./notesClient');

const client = new NotesClient();
const model = new NotesModel();
const view = new NotesView(model, client);

view.displayNotesFromApi();
