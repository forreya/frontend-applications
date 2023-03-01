
const NotesClient = require('./client');

require('jest-fetch-mock').enableMocks()

describe('NotesClient', () => {
  it('calls fetch and loads notes data', (done) => {

    const client = new NotesClient();

    fetch.mockResponseOnce(JSON.stringify({
      name: "Note 1",
      id: 1
    }));

    client.loadData((notes) => {
      expect(notes.name).toBe("Some value");
      expect(notes.id).toBe(1);

      done();
    });
  });
});