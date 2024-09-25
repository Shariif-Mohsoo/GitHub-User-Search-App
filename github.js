class GitHub {
  constructor() {
    this.client_id = "Ov23lijhcdXjPz27YaA6";
    this.client_secret = "b26f727eeedfc05e012b1faf0cbcc21b6c532bb5";
    this.repos_count = 10;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    //parsing the json response mandatory
    const profile = await profileResponse.json();
    const repos = await reposResponse.json();
    // console.log(profile);
    console.log("repos", repos);
    return {
      profile,
      repos,
    };
  }
}
