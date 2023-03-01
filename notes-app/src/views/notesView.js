
class NotesView {
  constructor(model, client) {
    this.client = client
    this.model = model
    this.notes = []

    this.mainContainer = document.querySelector('#main-container');
    this.addButtonEl = document.querySelector('#add-note-button')
    this.inputEl = document.querySelector('#add-note-input')

    this.addButtonEl.addEventListener('click', () => {
      this.addNote();
    })

    this.displayNotes();
  }

  displayNotes() {
    document.querySelectorAll('note').forEach((note) => {
      note.remove()
    })

    document.querySelectorAll('br').forEach((br) => {
      br.remove()
    })

    this.notes = this.model.getNotes()
    this.notes.forEach((note) => {
      const currentNote = document.createElement('note');
      currentNote.textContent = note;
      this.mainContainer.appendChild(currentNote);
      this.mainContainer.appendChild(document.createElement('br'))
    });
  }

  async addNote() {
    const newNote = this.inputEl.value;
    try {
      await this.client.createNote(newNote)
      this.displayNotesFromApi()
      this.inputEl.value = ''
    } catch (error) {
      this.displayError(error);
    }
  }

  displayNotesFromApi() {
    this.client.loadNotes(
      (notes) => {
        this.model.setNotes(notes);
        this.displayNotes();
      },
      (error) => {
        this.displayError(error);
      }
    );
  }

  displayError(error) {
    const errorElement = document.createElement('div');
    errorElement.classList.add('error-message');
    errorElement.textContent = `Oops, something went wrong! Here's the error: ${error}`;
    document.body.appendChild(errorElement);
  }

}

module.exports = NotesView;