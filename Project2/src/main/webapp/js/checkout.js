let checkButton = document.getElementById("checkoutBtn");
let tempCart = localStorage.getItem('cartStorage')
let currentcart = JSON.parse(tempCart)

console.log(currentcart)

let pName = "";
let stringPrice = 0;
let productNum = currentcart.itemNum;




for(let i = 0; i < currentcart.name.length; i++) {
  
  pName += `${currentcart.name[i]} `
}
  
for(let j = 0; j < currentcart.num.length; j++) {
    
  stringPrice += currentcart.num[j] + stringPrice;
    
}


console.log(pName)
console.log(stringPrice)
console.log(productNum)



checkButton.addEventListener("click", async() => {

    const rawResponse = await fetch('http://localhost:8080/app/cart', {

        method: 'POST',

        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({items: pName , itemNum: productNum, total: stringPrice })
      });
      const content = await rawResponse.json();
    
      console.log(content);
      


    });


    let items = document.getElementById("items")
    items.innerText = `Items: ${pName} `
    let prices = document.getElementById("price")
    prices.innerText = `Total: ${stringPrice}`
    let quantity = document.getElementById("numofitems")
    quantity.innerHTML = `Quantity: ${productNum}`
    






    



      







