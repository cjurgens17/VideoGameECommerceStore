// Update User Information
let updateButton = document.getElementById("updateInfo");
let thisUser = localStorage.getItem('currentUser');
let updateUser = JSON.parse(thisUser)


updateButton.addEventListener('click', async() => {
    
Person = {
     firstName: document.getElementById("fnUpdate").value,
     lastName : document.getElementById("lnUpdate").value,
     username: document.getElementById("unUpdate").value,
     password: document.getElementById("pwUpdate").value,
     userid: updateUser.id
}
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
            body: JSON.stringify({firstName: Person.firstName, lastName: Person.lastName, username: Person.username, password: Person.password, id: Person.userid})
        });
        console.log(JSON.stringify({firstName: Person.firstName, lastName: Person.lastName, username: Person.username, password: Person.password, id: Person.userid}))

        const content = await raw_resp.json();
        console.log(content)
        localStorage.setItem('currentUser',JSON.stringify(Person))
        window.location.replace("myAccount.html")

        

    } catch (error) {
        console.log(error)
    }

   
    

    
});


// function displayAccount2() {
//     console.log(updateUser);
//     let info = document.getElementById("user-info");
//     info.innerText = `Name: ${updateUser.firstName} ${updateUser.lastName}`
//     info.append(document.createElement("br"));
//     info.append(`Username: ${updateUser.username}`);
//     // info.append(`Address: ${cUser.address}`);
// }