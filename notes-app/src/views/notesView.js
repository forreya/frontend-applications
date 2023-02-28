
class NotesView {
  constructor(model) {
    this.notes = model.getNotes()
    this.mainContainer = document.querySelector('#main-container');
    this.addButtonEl = document.querySelector('#add-note-button')
    this.inputEl = document.querySelector('#add-note-input')

    this.addButtonEl.addEventListener('click', () => {
      this.addNote();
    })
  }

  displayNotes() {
    document.querySelectorAll('note').forEach((note) => {
      note.remove()
    })

    this.notes.forEach((note) => {
      const currentNote = document.createElement('note');
      currentNote.textContent = note;
      this.mainContainer.appendChild(currentNote);
    });
  }

  addNote() {
    const newNote = this.inputEl.value;
    this.notes.push(newNote)
    this.displayNotes()
    this.inputEl.value = ''
  }

}

module.exports = NotesView;