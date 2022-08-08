var cart = [];
let userStorage = localStorage.getItem('currentUser')
let currentUser = JSON.parse(userStorage)
console.log(currentUser)
let cartInventory = localStorage.setItem('productStorage')

let button0 = document.getElementById("button0");

button0.addEventListener('click', async() => {

    try {

        const raw_response = await fetch(`http://localhost:8080/app/products`);

        if(!raw_response.ok){
            throw new Error(raw_response.status)
        }

        const json_data = await raw_response.json();

        console.log(json_data)

        let products = cart.push(json_data[0].productName + " " + json_data[0].price);

        cartInventory.setItem(products)
        
        console.log(cartInventory);

        console.log(cart);

    }catch(error){
        console.log(error);
    }
})

let button1 = document.getElementById("button1");

button1.addEventListener('click', async() => {

    try {

        const raw_response = await fetch(`http://localhost:8080/app/products`);

        if(!raw_response.ok){
            throw new Error(raw_response.status)
        }

        const json_data = await raw_response.json();

        console.log(json_data)

        let products = cart.push(json_data[1].productName + " " + json_data[1].price);

        products.setItem('cartInventory');

        console.log(products);

        console.log(cart);

    }catch(error){
        console.log(error);
    }
})

let button2 = document.getElementById("button2");

button2.addEventListener('click', async() => {

    try {

        const raw_response = await fetch(`http://localhost:8080/app/products`);

        if(!raw_response.ok){
            throw new Error(raw_response.status)
        }

        const json_data = await raw_response.json();

        console.log(json_data)    

        let products = cart.push(json_data[2].productName + " " + json_data[2].price);

        products.setItem('cartInventory');

        console.log(products);

        console.log(cart);

    }catch(error){
        console.log(error);
    }
})

let button3 = document.getElementById("button3");

button3.addEventListener('click', async() => {

    try {

        const raw_response = await fetch(`http://localhost:8080/app/products`);

        if(!raw_response.ok){
            throw new Error(raw_response.status)
        }

        const json_data = await raw_response.json();

        console.log(json_data)
            
        let products = cart.push(json_data[3].productName + " " + json_data[3].price);

        products.setItem('cartInventory');

        console.log(products);
    
        console.log(cart);

    }catch(error){
        console.log(error);
    }
})

let button4 = document.getElementById("button4");

button4.addEventListener('click', async() => {

    try {

        const raw_response = await fetch(`http://localhost:8080/app/products`);

        if(!raw_response.ok){
            throw new Error(raw_response.status)
        }

        const json_data = await raw_response.json();

        console.log(json_data)
            
        let products = cart.push(json_data[4].productName + " " + json_data[4].price);
        
        products.setItem('cartInventory');

        console.log(products);

        console.log(cart);

    }catch(error){
        console.log(error);
    }
})

let button5 = document.getElementById("button5");

button5.addEventListener('click', async() => {

    try {

        const raw_response = await fetch(`http://localhost:8080/app/products`);

        if(!raw_response.ok){
            throw new Error(raw_response.status)
        }

        const json_data = await raw_response.json();

        console.log(json_data)
            
        let products = cart.push(json_data[5].productName + " " + json_data[5].price);

        products.setItem('cartInventory');

        console.log(products);

        console.log(cart);

    }catch(error){
        console.log(error);
    }
})

let button6 = document.getElementById("button6");

button6.addEventListener('click', async() => {

    try {

        const raw_response = await fetch(`http://localhost:8080/app/products`);

        if(!raw_response.ok){
            throw new Error(raw_response.status)
        }

        const json_data = await raw_response.json();

        console.log(json_data)
            
        let products = cart.push(json_data[6].productName + " " + json_data[6].price);

        products.setItem('cartInventory');

        console.log(products);

        console.log(cart);

    }catch(error){
        console.log(error);
    }
})

let button7 = document.getElementById("button7");

button7.addEventListener('click', async() => {

    try {

        const raw_response = await fetch(`http://localhost:8080/app/products`);

        if(!raw_response.ok){
            throw new Error(raw_response.status)
        }

        const json_data = await raw_response.json();

        console.log(json_data)
            
        let products = cart.push(json_data[7].productName + " " + json_data[7].price);

        products.setItem('cartInventory');
        
        console.log(products);

        console.log(cart);

    }catch(error){
        console.log(error);
    }
})