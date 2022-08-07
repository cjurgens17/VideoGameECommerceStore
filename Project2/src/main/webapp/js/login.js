let loginButton = document.getElementById("login-button");

// let signUpButton = document.getElementById("signUpButton");
// console.log(loginButton);
//console.log(signUpButton);


// loginButton.addEventListener('click', async() => {

//     // var inputValue = document.getElementById("field").value;

//     try {



//         const raw_response = await fetch(`http://localhost:8080/app/username`);

//         if(!raw_response.ok){
//             throw new Error(raw_response.status)
//         }

//         const json_data = await raw_response.json();

//         console.log(json_data)

//          localStorage.setItem('currentUser', JSON.stringify(json_data));
        

//         window.location.replace("shop.html");

        
       
          
        

        


        

      

        




//     }catch(error){
//         console.log(error);
//     }


// })




loginButton.addEventListener("click", async() => {

    try{

    const rawResponse = await fetch('http://localhost:8080/app/username', {

        method: 'POST',

        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: document.getElementById("username-sign-in").value})
      });
      const content = await rawResponse.json()
    
      console.log(content);

      

        localStorage.setItem('currentUser', JSON.stringify(content));

    }catch(error){
        console.log(error)
    }

        // window.location.replace("shop.html");
    });
