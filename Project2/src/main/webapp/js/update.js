// Update User Information
let updateButton = document.getElementById("updateInfo");
let thisUser = localStorage.getItem('currentUser');
let updateUser = JSON.parse(thisUser)


updateButton.addEventListener('click', async() => {
    

    let firstName = document.getElementById("fnUpdate").value;
    let lastName = document.getElementById("lnUpdate").value;
    let username = document.getElementById("unUpdate").value;
    let password = document.getElementById("pwUpdate").value;
    let userid = updateUser.id;
    // let address = document.getElementById("addUpdate").value;

    // let userUpdate = {
    //     firstName: firstName,
    //     lastName: lastName,
    //     username: username,
    //     password: password,
    //     id: userid
    //     // address: address
    // };

    

    try {
        
        const raw_resp = await fetch(`http://localhost:8080/app/userUpdate`, {

            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({firstName: firstName, lastName: lastName, username: username, password: password, id: userid})
        });
        console.log(JSON.stringify({firstName: firstName, lastName: lastName, username: username, password: password, id: userid}))

        

    } catch (error) {
        console.log(error)
    }

    
});