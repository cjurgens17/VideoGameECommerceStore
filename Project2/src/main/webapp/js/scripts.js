/*!
* Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// Functions by Li Villaranda

let user = localStorage.getItem('currentUser');
let cUser = JSON.parse(user);

let cartInv = localStorage.getItem('cartInventory');

// User LogOut Function
function logOut() {
    localStorage.removeItem('currentUser');
    window.location.replace('index.html');
}

// Display Account Information
function displayAccount() {
    console.log(cUser);
    let info = document.getElementById("user-info");
    info.innerText = `Name: ${cUser.firstName} ${cUser.lastName}`
    info.append(document.createElement("br"));
    info.append(`Username: ${cUser.username}`);
    // info.append(`Address: ${cUser.address}`);
}

// Cart HTML Function
function goToCart() {
    items = localStorage.getItem('cartInventory');
    window.location.replace("cart.html");

    let cart = document.getElementById("items");
    cart.append(items);

    console.log('Page Changed.');
}



// // Display Order
// function displayOrder() {
//     localStorage.getItem(cartInventory);

//     let items = document.getElementById('items');

//     for (item in items) {
//         item.append(item[i]);
//         item.append(document.createElement("tr"));
//     }
// }