var cart = {
    num: [],
    name: [],
    itemNum: 0

  }

let products = localStorage.getItem('productStorage')
let allProducts = JSON.parse(products)
console.log(allProducts)
let userStorage = localStorage.getItem('currentUser')
let currentUser = JSON.parse(userStorage)
console.log(currentUser)

let button0 = document.getElementById("button0");

button0.addEventListener('click', async() => {

        cart.num.push(allProducts[0].price);
        cart.name.push(allProducts[0].productName);
        cart.itemNum += 1;

        console.log('This is the Cart: ')
        console.log(cart)
        
        

        localStorage.setItem('cartStorage', JSON.stringify(cart));

        

        console.log('this is the tempCart')
        console.log(localStorage.getItem('cartStorage'));
        
})

let button1 = document.getElementById("button1");

button1.addEventListener('click', async() => {


        cart.num.push(allProducts[1].price);
        cart.name.push(allProducts[1].productName);
        cart.itemNum += 1;

        console.log('This is the Cart: ')
        console.log(cart)

        localStorage.setItem('cartStorage', JSON.stringify(cart));

        

        console.log('this is the tempCart')
        console.log(localStorage.getItem('cartStorage'));
        

   
})

let button2 = document.getElementById("button2");

button2.addEventListener('click', async() => {

    

    cart.num.push(allProducts[2].price);
    cart.name.push(allProducts[2].productName);
    cart.itemNum += 1;

    console.log('This is the Cart: ')
    console.log(cart)

    localStorage.setItem('cartStorage', JSON.stringify(cart));

    

    console.log('this is the tempCart')
    console.log(localStorage.getItem('cartStorage'));
        
   
})

let button3 = document.getElementById("button3");

button3.addEventListener('click', async() => {

        cart.num.push(allProducts[3].price);
        cart.name.push(allProducts[3].productName);
        cart.itemNum += 1;

        console.log('This is the Cart: ')
        console.log(cart)

        localStorage.setItem('cartStorage', JSON.stringify(cart));

        

        console.log('this is the tempCart')
        console.log(localStorage.getItem('cartStorage'));
})

let button4 = document.getElementById("button4");

button4.addEventListener('click', async() => {

    cart.num.push(allProducts[4].price);
    cart.name.push(allProducts[4].productName);
    cart.itemNum += 1;

    console.log('This is the Cart: ')
    console.log(cart)

    localStorage.setItem('cartStorage', JSON.stringify(cart));

    

    console.log('this is the tempCart')
    console.log(localStorage.getItem('cartStorage'));
})

let button5 = document.getElementById("button5");

button5.addEventListener('click', async() => {

    cart.num.push(allProducts[5].price);
    cart.name.push(allProducts[5].productName);
    cart.itemNum += 1;

    console.log('This is the Cart: ')
    console.log(cart)

    localStorage.setItem('cartStorage', JSON.stringify(cart));

    

    console.log('this is the tempCart')
    console.log(localStorage.getItem('cartStorage'));
})

let button6 = document.getElementById("button6");

button6.addEventListener('click', async() => {

    cart.num.push(allProducts[7].price);
    cart.name.push(allProducts[7].productName);
    cart.itemNum += 1;

    console.log('This is the Cart: ')
    console.log(cart)

    localStorage.setItem('cartStorage', JSON.stringify(cart));

    

    console.log('this is the tempCart')
    console.log(localStorage.getItem('cartStorage'));
})

let button7 = document.getElementById("button7");

button7.addEventListener('click', async() => {

    cart.num.push(allProducts[6].price);
        cart.name.push(allProducts[6].productName);
        cart.itemNum += 1;

        console.log('This is the Cart: ')
        console.log(cart)

        localStorage.setItem('cartStorage', JSON.stringify(cart));

        

        console.log('this is the tempCart')
        console.log(localStorage.getItem('cartStorage'));
})