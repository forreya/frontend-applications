
class NotesViews {
  constructor() {
    this.notes = []
  }

  displayNotes() {
    this.notes.forEach((note) => {
      const currentNote = document.createElement('note')
      currentNote.textContent = note;
      document.body.append(currentNote);
    })
  }
}

module.exports = NotesViews;