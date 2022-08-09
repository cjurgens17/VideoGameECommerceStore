// Update User Information
let updateButton = document.getElementById("updateAccount");
let user = localStorage.getItem('currentUser');

checkButton.addEventListener("click", async() => {
    // Event.preventDefault();

    console.log(currentUser)

    let firstName = document.getElementById("fnUpdate").value;
    let lastName = document.getElementById("lnUpdate").value;
    let username = document.getElementById("unUpdate").value;
    let password = document.getElementById("pwUpdate").value;
    // let address = document.getElementById("addUpdate").value;

    let userUpdate = {
        firstName: firstName,
        lastName: lastName,
        username: username,
        password: password
        // address: address
    };

    console.log(userUpdate);

    try {
        
        const raw_resp = await fetch('http://localhost:8080/app/user', {

            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "User-Id": user.userID
            },
            body: userUpdate
        });

    } catch (error) {
        console.log(error)
    }

    
});