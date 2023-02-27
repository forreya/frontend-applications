class MessageView {
  constructor() {
    this.showEl = document.querySelector('#show-message-button');
    this.hideEl = document.querySelector('#hide-message-button');

    this.mainContainer = document.querySelector('#main-container');

    this.showEl.addEventListener('click', () => {
       this.displayMessage();
    });

    this.hideEl.addEventListener('click', () => {
      this.hideMessage();
   });
  }

  displayMessage() {
    const newDiv = document.createElement('message');
    newDiv.id = 'message'
    newDiv.textContent = 'This message displayed by JavaScript.'
    this.mainContainer.append(newDiv);
  }

  hideMessage() {
    const messageEl = document.querySelector('#message');
    if (messageEl) {
      this.mainContainer.removeChild(messageEl);
    }
  }
}

module.exports = MessageView;