// Update User Information
let updateButton = document.getElementById("updateAccount");
let currentUser = localStorage.getItem('currentUser');
let updatedUser = JSON.parse(currentUser)

updateButton.addEventListener("click", async() => {
    // Event.preventDefault();

    console.log(currentUser)
    console.log(updatedUser)

    let firstName = document.getElementById("fnUpdate").value;
    let lastName = document.getElementById("lnUpdate").value;
    let username = document.getElementById("unUpdate").value;
    let password = document.getElementById("pwUpdate").value;
    // let address = document.getElementById("addUpdate").value;

    let userId = updatedUser.id
    console.log(userId)
    // let userUpdate = {
    //     firstName: firstName,
    //     lastName: lastName,
    //     username: username,
    //     password: password

    // };

    //console.log(userUpdate);

    try {
        
        const raw_resp = await fetch(`http://localhost:8080/app/userUpdate`, {

            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({firstName:firstName, lastName:lastName, username:username, password:password, id:userId})
          })
          console.log(JSON.stringify({firstName:firstName, lastName:lastName, username:username, password:password, id:userId}))

          const content = await raw_resp.json()



         window.location.replace("login.html")

    } catch (error) {
        console.log(error)
    }

    
});