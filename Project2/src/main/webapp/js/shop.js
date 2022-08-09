var cart = {
    num: [],
    name: []
  }


let userStorage = localStorage.getItem('currentUser')
let currentUser = JSON.parse(userStorage)
console.log(currentUser)

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

        cart.num.push(json_data[0].price);
        cart.name.push(json_data[0].productName);

        console.log('This is the Cart: ')
        console.log(cart)

        localStorage.setItem('cartStorage', JSON.stringify(cart));

        

        console.log('this is the tempCart')
        console.log(localStorage.getItem('cartStorage'));
        

        

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

        cart.num.push(json_data[1].price);
        cart.name.push(json_data[1].productName);

        console.log('This is the Cart: ')
        console.log(cart)

        localStorage.setItem('cartStorage', JSON.stringify(cart));

        

        console.log('this is the tempCart')
        console.log(localStorage.getItem('cartStorage'));
        

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

        cart.num.push(json_data[2].price);
        cart.name.push(json_data[2].productName);

        console.log('This is the Cart: ')
        console.log(cart)

        localStorage.setItem('cartStorage', JSON.stringify(cart));

        

        console.log('this is the tempCart')
        console.log(localStorage.getItem('cartStorage'));
        
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

        cart.num.push(json_data[3].price);
        cart.name.push(json_data[3].productName);

        console.log('This is the Cart: ')
        console.log(cart)

        localStorage.setItem('cartStorage', JSON.stringify(cart));

        

        console.log('this is the tempCart')
        console.log(localStorage.getItem('cartStorage'));
        

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

        cart.num.push(json_data[4].price);
        cart.name.push(json_data[4].productName);

        console.log('This is the Cart: ')
        console.log(cart)

        localStorage.setItem('cartStorage', JSON.stringify(cart));

        

        console.log('this is the tempCart')
        console.log(localStorage.getItem('cartStorage'));
        
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

        cart.num.push(json_data[5].price);
        cart.name.push(json_data[5].productName);

        console.log('This is the Cart: ')
        console.log(cart)

        localStorage.setItem('cartStorage', JSON.stringify(cart));

        

        console.log('this is the tempCart')
        console.log(localStorage.getItem('cartStorage'));
        

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

        cart.num.push(json_data[6].price);
        cart.name.push(json_data[6].productName);

        console.log('This is the Cart: ')
        console.log(cart)

        localStorage.setItem('cartStorage', JSON.stringify(cart));

        

        console.log('this is the tempCart')
        console.log(localStorage.getItem('cartStorage'));
        

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

        cart.num.push(json_data[7].price);
        cart.name.push(json_data[7].productName);

        console.log('This is the Cart: ')
        console.log(cart)

        localStorage.setItem('cartStorage', JSON.stringify(cart));

        

        console.log('this is the tempCart')
        console.log(localStorage.getItem('cartStorage'));
        
    }catch(error){
        console.log(error);
    }
})