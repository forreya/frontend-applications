class GithubView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      this.client.getRepoInfo(repoName, repoData => {
        this.display(repoData)
      });
    });
  }

  display(repoData) {
    const name = repoData.full_name
    const description = repoData.description

    const nameEl = document.querySelector('#repo-name')
    nameEl.textContent = name
    const descriptionEl = document.querySelector('#repo-description')
    descriptionEl.textContent = description
  }
}

module.exports = GithubView;