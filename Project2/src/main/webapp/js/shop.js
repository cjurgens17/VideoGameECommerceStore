// let userStorage = localStorage.getItem('currentUser');
// let currentUser = JSON.parse(userStorage);
// console.log(currentUser);
// let moodButton = document.getElementById("btn_id");

// let welcomeScreen = document.getElementById("welcome_screen");
// welcomeScreen.innerText = `Welcome ${currentUser.firstName}, Check Todays Horoscope`;
var cart = [];

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

        localStorage.setItem('productStorage', JSON.stringify(json_data));

        
       
        let products = localStorage.getItem('productStorage');  
        

        console.log(products);


        cart.push(json_data[0].productName + " " + json_data[0].price);

        console.log(cart);

        console.log(cart[0]);




    }catch(error){
        console.log(error);
    }


})


//cart array

// let cart = [{}];
// let products = localStorage.getItem('productStorage');


// cart.push(products[1]);

// console.log(cart);





