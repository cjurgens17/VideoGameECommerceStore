let registerButton = document.getElementById("new-user");

registerButton.addEventListener("click", async() => {

    const rawResponse = await fetch('http://localhost:8080/app/user', {

        method: 'POST',

        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({firstName: document.getElementById("first-name-input").value,
        lastName: document.getElementById("last-name-input").value,
        username: document.getElementById("username-input").value,
        password: document.getElementById("password-input").value})
      });
      console.log(JSON.stringify({firstName: document.getElementById("first-name-input").value,
      lastName: document.getElementById("last-name-input").value,
      username: document.getElementById("username-input").value,
      password: document.getElementById("password-input").value}))
      const content = await rawResponse.json();
    
      console.log(content);

      window.location.replace('login.html')
    });


