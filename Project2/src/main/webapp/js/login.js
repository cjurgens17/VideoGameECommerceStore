let loginButton = document.getElementById("login-button");

// let user = localStorage.getItem('currentUser');

loginButton.addEventListener("click", async() => {

  let username = document.getElementById("username-sign-in").value;
  let password = document.getElementById("password-sign-in").value;
  
  let user = {
   username, password
  }

  try{

  const rawResponse = await fetch('http://localhost:8080/app/login', {

      method: 'POST',

      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    body: JSON.parse(user)
    });
    const content = await rawResponse.json();
    console.log(rawResponse)
  
    console.log(content);

    localStorage.setItem('currentUser', JSON.parse(content))

    window.location.replace("shop.html")

  }catch(error){

    console.log(error)
  }
  });
