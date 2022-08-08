let loginButton = document.getElementById("login-button");
// let signUpButton = document.getElementById("signUpButton");
console.log(loginButton);
//console.log(signUpButton);


loginButton.addEventListener('click', async() => {

    // var inputValue = document.getElementById("field").value;

    try {



        const raw_response = await fetch(`http://localhost:8080/app/users`);

        if(!raw_response.ok){
            throw new Error(raw_response.status)
        }

        const json_data = await raw_response.json();

        console.log(json_data)

        localStorage.setItem('currentUser', JSON.stringify(json_data));

        window.location.replace("index.html");

        
       
          
        

        


        

      

        




    }catch(error){
        console.log(error);
    }


})