//Instantiate the Class GitHub
const github = new GitHub();
//Instantiate the Class UI
const ui = new UI();
//Search Input
const searchUser = document.getElementById("searchUser");
//Search Input Event Listener
searchUser.addEventListener(
  "input",
  deBounce((e) => {
    //Get input text
    const userText = e.target.value;
    if (userText !== "") {
      github.getUser(userText).then((data) => {
        if (data.profile.message === "Not Found") {
          //Show Alert
          ui.showAlert("User Not Found", "alert alert-danger");
        } else {
          //Show Profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      });
    } else {
      //Clear Profile
      ui.clearProfile();
    }
  }, 500)
);
//TODO: MAKE SURE TO DEBOUNCE THE FUNCTION CALL FOR APIS.
