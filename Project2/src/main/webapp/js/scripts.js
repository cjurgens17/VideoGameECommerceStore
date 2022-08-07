/*!
* Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// User LogOut Function
function logOut() {
    localStorage.removeItem('currentUser');
    window.location.replace('index.html');
}

// Cart HTML Function
function goToCart() {
    items = localStorage.getItem('cartInventory');
    window.location.replace("cart.html");

    let cart = document.getElementById("items");
    cart.append(items);

    console.log('Page Changed.');
}

// Display Order
function displayOrder() {
    let order = localStorage.getItem('cartInventory');

    let items = document.getElementById('items');

    for (item in items) {
        item.append(item[i]);
        item.append(document.createElement("tr"));
    }
}