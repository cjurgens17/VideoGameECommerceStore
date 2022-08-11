/*!
* Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
let user = localStorage.getItem('currentUser');
    let cUser = JSON.parse(user);

// Functions by Li Villaranda

// let user = localStorage.getItem('currentUser');
// let cUser = JSON.parse(user);

// let cart = localStorage.getItem('cartStorage');

// User LogOut Function
function logOut() {
    localStorage.removeItem('currentUser');
    window.location.replace('index.html');
}

// Display Account Information
    function displayAccount(){
    console.log(cUser);
    let info = document.getElementById("user-info");
    info.innerText = `Name: ${cUser.firstName} ${cUser.lastName}`
    info.append(document.createElement("br"));
    info.append(`Username: ${cUser.username}`);
    // info.append(`Address: ${cUser.address}`);
}

// Cart HTML Function
function goToCart() {
    window.location.replace("cart.html");
    console.log('Page Changed.');
}

// Cart Total
function cartTotal() {

    for (let i = 0; i < currentcart.name.length; i++) {

        pName += `${currentcart.name[i]} `
    }

    for (let j = 0; j < currentcart.num.length; j++) {

        stringPrice += currentcart.num[j] + stringPrice;
    };

    let price = document.getElementById("total");

    var total = 0;
    $("td").each(function () {
        total += Number($(this).text());
    });
    console.log("Result: " + total);

    price.innerHTML = `Total: $ ${total}`;
}

// Add Items to Cart
function add() {

    let product = document.getElementById("product-name");
    let price = document.getElementById("price");
    let item = document.getElementById("items");
    let qty = 1;
    let remove = document.getElementById("removeButton");
    let newRow = document.createElement("tr");
    let newData = document.createElement("td");

    for (let i = 0; i <= cart.length; i++) {
        newRow;
        newRow.append(newData);
        newData.innerHTML = `${cart.name[i]}`;
        newRow.append(newData);
        newData.innerHTML = `${cart.num[i]}`;
        newRow.append(newData);
        newData.innerHTML = 1;
        newRow.append(newData);
        newData.innerHTML = "Add Button"

    }
}