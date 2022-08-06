let registerButton = document.getElementById("new-user");
 console.log(registerButton);

 registerButton.addEventListener("click", (event) => {

  event.preventDefault();

  let xhttp = new XMLHttpRequest();

  let firstname = document.getElementById("first-name-input").value;
  let lastname = document.getElementById("last-name-input").value;
  let username = document.getElementById("username-input").value;
  let password = document.getElementById("password-input").value;
  


  let newUser = {
    first_name:firstname,
    last_name:lastname,
    username:username,
    password_id:password,
    
  }

  console.log(newUser);

  xhttp.onreadystatechange = function(){  
    if(this.readyState == 4 && xhttp.status === 200){
      let data = JSON.parse(xhttp.responseText);
      console.log(data);

      window.location.replace("login.html");


    }
    else if(this.readyState == 4 && xhttp.status == 204){
      console.log(xhttp.responseText)
      alert("Failed to Login: Status Code - " + xhttp.status)
    }
  };

 xhttp.open("POST", `http://localhost:8080/` );
 
 xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
 xhttp.setRequestHeader("Content-Type","application/json");
 
 console.log(xhttp)
xhttp.send(JSON.stringify(newUser)); 
});