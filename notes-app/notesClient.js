
class NotesClient {
  loadNotes(successCallback, errorCallback) {
    fetch('http://localhost:3000/notes')
      .then(response => response.json())
      .then(data => {
        successCallback(data);
      })
      .catch(error => {
        errorCallback(error);
      });
  }

  async createNote(noteText) {
    try {
      const response = await fetch("http://localhost:3000/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: noteText }),
      })
  
      const responseData = await response.json();
  
      if (response.ok) {
        console.log(`Success: ${responseData}`);
      } 
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

module.exports = NotesClient;
