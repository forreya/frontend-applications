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
    const message = document.querySelector('#message-input').value;

    const newDiv = document.createElement('div');
    newDiv.id = 'message'
    newDiv.textContent = message;
    this.mainContainer.append(newDiv);
  }

  hideMessage() {
    const messageEls = document.querySelectorAll('#message');
    messageEls.forEach((messageEl) => {
      this.mainContainer.removeChild(messageEl);
    })
    console.log(messageEls)
    // if (messageEl) {
    //   this.mainContainer.removeChild(messageEl);
    // }
  }
}

module.exports = MessageView;