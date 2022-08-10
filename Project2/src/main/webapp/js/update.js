// Update User Information

let user = localStorage.getItem('currentUser');

async function updateAccount(event) {
    event.preventDefault();

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
        
        const raw_resp = await fetch('http://localhost:8080/app/update', {

            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "User-Id": user.userID
            },
            body: userUpdate
        });

    } catch (error) {
        console.log(error)
    }

    
};