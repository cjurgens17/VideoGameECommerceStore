var cart = [];

let button0 = document.getElementById("button0");

button0.addEventListener('click', async() => {

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

let button1 = document.getElementById("button1");

button1.addEventListener('click', async() => {

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

        cart.push(json_data[1].productName + " " + json_data[1].price);

        console.log(cart);

        console.log(cart[1]);

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

        localStorage.setItem('productStorage', JSON.stringify(json_data));
            
        let products = localStorage.getItem('productStorage');    

        console.log(products);

        cart.push(json_data[2].productName + " " + json_data[2].price);

        console.log(cart);

        console.log(cart[2]);

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

        localStorage.setItem('productStorage', JSON.stringify(json_data));
            
        let products = localStorage.getItem('productStorage');    

        console.log(products);

        cart.push(json_data[3].productName + " " + json_data[3].price);

        console.log(cart);

        console.log(cart[3]);

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

        localStorage.setItem('productStorage', JSON.stringify(json_data));
            
        let products = localStorage.getItem('productStorage');    

        console.log(products);

        cart.push(json_data[4].productName + " " + json_data[4].price);

        console.log(cart);

        console.log(cart[4]);

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

        localStorage.setItem('productStorage', JSON.stringify(json_data));
            
        let products = localStorage.getItem('productStorage');    

        console.log(products);

        cart.push(json_data[5].productName + " " + json_data[5].price);

        console.log(cart);

        console.log(cart[5]);

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

        localStorage.setItem('productStorage', JSON.stringify(json_data));
            
        let products = localStorage.getItem('productStorage');    

        console.log(products);

        cart.push(json_data[6].productName + " " + json_data[6].price);

        console.log(cart);

        console.log(cart[6]);

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

        localStorage.setItem('productStorage', JSON.stringify(json_data));
            
        let products = localStorage.getItem('productStorage');    

        console.log(products);

        cart.push(json_data[7].productName + " " + json_data[7].price);

        console.log(cart);

        console.log(cart[7]);

    }catch(error){
        console.log(error);
    }
})