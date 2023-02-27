/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesViews = require('../src/views/notesView');

describe('NotesView', () => {
  let note_view;

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    note_view = new NotesViews;
  });

  it('should display all notes on the page', () => {
    const notes = ['Note 1', 'Note 2', 'Note 3'];
    note_view.notes = notes;
    note_view.displayNotes();

    const noteElements = document.querySelectorAll('note');
    expect(noteElements.length).toBe(notes.length);

    noteElements.forEach((noteElement, index) => {
      expect(noteElement.textContent).toBe(notes[index]);
    });
  });

  it('should not display anything if there are no notes', () => {
    note_view.displayNotes();

    const noteElements = document.querySelectorAll('note');
    expect(noteElements.length).toBe(0);
  });

});
