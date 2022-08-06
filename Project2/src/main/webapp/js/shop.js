// let userStorage = localStorage.getItem('currentUser');
// let currentUser = JSON.parse(userStorage);
// console.log(currentUser);
// let moodButton = document.getElementById("btn_id");

// let welcomeScreen = document.getElementById("welcome_screen");
// welcomeScreen.innerText = `Welcome ${currentUser.firstName}, Check Todays Horoscope`;


let button = document.getElementById("button");

button.addEventListener('click', async() => {

    // var inputValue = document.getElementById("field").value;

    try {



        const raw_response = await fetch(`http://localhost:8080/app/products`);

        if(!raw_response.ok){
            throw new Error(raw_response.status)
        }

        const json_data = await raw_response.json();

        console.log(json_data)

        // var input = document.getElementById("input");
        var horoscope = document.createElement('h2');


        horoscope.innerHTML = `Testing data get: ${json_data}`;
        

        

       

       
       





    }catch(error){
        console.log(error);
    }


})

