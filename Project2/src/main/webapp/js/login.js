let loginButton = document.getElementById("login-button");

// let user = localStorage.getItem('currentUser');

loginButton.addEventListener("click", async() => {

  let username = document.getElementById("username-sign-in").value;
  

  try{

  const rawResponse = await fetch('http://localhost:8080/app/login', {

      method: 'POST',

      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
<<<<<<< HEAD
      body: username
=======

      body: username

>>>>>>> 75390e01887831b23e35951f72bd22dab039416b
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
