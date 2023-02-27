
class NotesView {
  constructor(model) {
    this.notes = model.getNotes()
    this.mainContainer = document.querySelector('#main-container');
  }

  displayNotes() {
    
    this.notes.forEach((note) => {
      const currentNote = document.createElement('note');
      currentNote.textContent = note;
      this.mainContainer.appendChild(currentNote);
    });
  }
}

module.exports = NotesView;