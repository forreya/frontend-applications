class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');
    this.secondParagraph = document.querySelector('#second-paragraph');
    this.allParagraphs = document.querySelectorAll('p');
  }

  addParagraph() {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'New paragraph alert!';
    document.body.append(newParagraph);
  }

  clearParagraphs() {
    this.allParagraphs.forEach((paragraph) => paragraph.remove())
  }
}

module.exports = View;