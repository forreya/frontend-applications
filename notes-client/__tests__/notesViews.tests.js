/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('../src/views/notesView');

describe('NotesView', () => {
  let note_view;

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const notes_model = {getNotes: () => []}
    note_view = new NotesView(notes_model);
  });

  it('should display all notes on the page', () => {
    const notes = ['Note 1', 'Note 2', 'Note 3'];
    note_view.notes = notes;
    note_view.displayNotes();

    const noteElements = document.querySelectorAll('note');
    expect(noteElements.length).toBe(3);

    noteElements.forEach((noteElement, index) => {
      expect(noteElement.textContent).toBe(notes[index]);
    });
  });

  it('should not display anything if there are no notes', () => {
    note_view.displayNotes();

    const noteElements = document.querySelectorAll('note');
    expect(noteElements.length).toBe(0);
  });

  it('adds a new note', () => {
    const input = document.querySelector('#add-note-input');
    input.value = 'A fun day at the waterpark!'

    const button = document.querySelector('#add-note-button')
    button.click();

    const noteElements = document.querySelectorAll('note');
    expect(noteElements.length).toEqual(1);
    expect(noteElements[0].textContent).toEqual('A fun day at the waterpark!');
  });

  it('clear the list of previous notes before displaying', () => {
    const notes = ['Note 1', 'Note 2', 'Note 3'];
    note_view.notes = notes;

    note_view.displayNotes();
    note_view.displayNotes();

    const noteElements = document.querySelectorAll('note');
    expect(noteElements.length).toEqual(3);
  });

});
