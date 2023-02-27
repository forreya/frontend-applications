/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicks the button', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    const showEl = document.querySelector('#show-message-button');
    showEl.click();

    expect(document.querySelector('#message')).not.toBeNull();
  });

  it('clicks the button to hide the message', () => {
    
    // Instantiate the view
    const view = new MessageView();
    
    // Click the button to hide the message

    const hideButtonEl = document.querySelector('#hide-message-button');

    hideButtonEl.click();
    
    // Verify that the message is hidden
    expect(document.querySelector('#message')).toBeNull();
  });
});