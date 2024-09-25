class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }
  showProfile(user) {
    this.profile.innerHTML = `
        <div class="card card-body mb-3" >
            <div class="row">
                <div
                    class="col-md-3"
                >
                    <img class="img-fluid mb-2" src="${user.avatar_url}"/>
                    <a href="${
                      user.html_url
                    }" target="_blank" class="btn btn-primary btn-block mb-4 ">
                        View Profile
                    </a>
                    </div>
                <div  class="col-md-9" >
                    <span class="badge bg-primary">Public Repo's: ${
                      user.public_repos
                    }</span>
                    <span class="badge bg-secondary">Public Gist's: ${
                      user.public_gists
                    }</span>
                    <span class="badge bg-success">Follower's: ${
                      user.followers
                    }</span>
                    <span class="badge bg-info">Following: ${
                      user.following
                    }</span>

                    <br><br>
                    <ul class="list-group" >
                        <li class="list-group-item" >Company: ${
                          user.company || " Not Specified By Profile Owner"
                        }</li>
                        <li class="list-group-item" >Website/Blog: ${
                          user.blog || " Not Specified By Profile Owner"
                        }</li>
                        <li class="list-group-item" >Location: ${
                          user.location || " Not Specified By Profile Owner"
                        }</li>
                        <li class="list-group-item" >Member Since: ${
                          user.created_at
                        }</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
    `;
  }
  clearProfile() {
    this.profile.innerHTML = "";
  }

  showRepos(repos) {
    // console.log(repos);
    let output = "";
    repos.forEach((repo) => {
      output += `
                    <div class="card card-body mb-2">
                        <div class="row">
                            <div class="col-md-6" >
                                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                            </div>
                            <div class="col-md-6">
                                <span class="badge bg-primary" >Stars: ${repo.stargazers_count}</span>
                                <span class="badge bg-secondary" >Watchers: ${repo.watchers_count}</span>
                                <span class="badge bg-success" >Forks: ${repo.forks_count}</span>
                            </div>
                        </div>
                    </div>
                `;
    });
    document.getElementById("repos").innerHTML = output;
  }

  showAlert(message, className) {
    //clear any remaining alert
    this.clearAlert();
    //create the div element
    const div = document.createElement("div");
    //Add classes
    div.className = className;
    //Add text
    div.appendChild(document.createTextNode(message));
    //get parent
    const container = document.querySelector(".searchContainer");
    //get search box
    const search = document.querySelector(".search");
    //Insert alert
    container.insertBefore(div, search);

    setTimeout(this.clearAlert, 3000);
  }

  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) currentAlert.remove();
  }
}
