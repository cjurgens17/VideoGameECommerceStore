let checkButton = document.getElementById("checkoutBtn");
let tempCart = localStorage.getItem('cartStorage')
let currentcart = JSON.parse(tempCart)

console.log(currentcart)

let pName = "";
let stringPrice = "";

// let chunked = [['xbox', 'playstation', 'gameboy'], ['price1','price2','price3']];

for(let i = 0; i < currentcart.name.length; i++) {
  
  pName += `${currentcart.name[i]}`
}
  
    for(let j = 0; j < currentcart.num.length; j++) {
    
    stringPrice += `${currentcart.num[j]}`
    
   }


var price = parseInt(stringPrice);


console.log(pName)
console.log(price)



checkButton.addEventListener("click", async() => {

    const rawResponse = await fetch('http://localhost:8080/app/cart', {

        method: 'POST',

        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({items: pName , itemNum: price })
      });
      const content = await rawResponse.json();
    
      console.log(content);
      


    });





//     var pName = '';
// var stringPrice = ''

// let chunked = [['xbox', 'playstation', 'gameboy'], ['price1','price2','price3']];

// for(let i = 0; i < chunked.length - 1; i++) {
//   var a = 0
//   pName += chunked[[a][i]]
  

//     for(let j = 0; j < chunked.length - 1; j++) {
//     var b = 1
//     stringPrice += chunked[[b][j]]
//    }
//   }


// console.log(pName)
// console.log(stringPrice)
    



      







