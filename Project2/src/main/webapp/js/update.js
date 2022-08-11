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

        const content = await raw_resp.json();
        console.log(content)
        localStorage.setItem('currentUser',JSON.stringify(content))
        window.location.replace("login.html")

        

    } catch (error) {
        console.log(error)
    }

   
    

    
});


function displayAccount2() {
    console.log(updateUser);
    let info = document.getElementById("user-info");
    info.innerText = `Name: ${updateUser.firstName} ${updateUser.lastName}`
    info.append(document.createElement("br"));
    info.append(`Username: ${updateUser.username}`);
    // info.append(`Address: ${cUser.address}`);
}