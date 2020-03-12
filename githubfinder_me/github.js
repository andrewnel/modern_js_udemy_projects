class GitHub {
  constructor() {
    this.client_id = 'b2aa4cb2ec869e3400bb';
    this.client_secret = 'e65c9878aab5a32f7304eea192fbfffd5b7f5d5e';
    this.repos_count = 5;
    this.repos_sort = 'updated-asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    };
  }
}
