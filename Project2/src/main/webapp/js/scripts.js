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

// let loggingOut = document.getElementById("logging-out");

// loggingOut.innerHTML = `Successfully Signed Out!`;

// Cart HTML Function
function goToCart() {
    // localStorage.getItem('productStorage');
    window.location.replace("cart.html");

    console.log('Page Changed.');
}