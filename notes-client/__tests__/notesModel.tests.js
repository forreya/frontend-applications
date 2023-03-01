const NotesModel = require('../src/models/NotesModel.js');

describe('NotesModel', () => {
  let model;

  beforeEach(() => {
    model = new NotesModel();
  });

  test('should initialize with an empty array', () => {
    expect(model.getNotes()).toEqual([]);
  });

  test('should add a note to the array', () => {
    model.addNote('Buy milk');
    expect(model.getNotes()).toEqual(['Buy milk']);
  });

  test('should add multiple notes to the array', () => {
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym']);
  });

  test('should reset the array of notes', () => {
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    model.reset();
    expect(model.getNotes()).toEqual([]);
  });
});
