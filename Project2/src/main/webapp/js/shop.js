var cart = {
  num: [],
  name: [],
  itemNum: 0
}

let tempCart = localStorage.getItem('cartStorage')
let currentcart = JSON.parse(tempCart)

let products = localStorage.getItem('productStorage')
let allProducts = JSON.parse(products)
console.log(allProducts)
let userStorage = localStorage.getItem('currentUser')
let currentUser = JSON.parse(userStorage)
console.log(currentUser)


for (let i = 0; i <= 7; i++) {
  
  let eventButton = null;

  if(allProducts[i].productId ==  1){
    eventButton = document.getElementById(`button0`)
  }else if(allProducts[i].productId == 2){
    eventButton = document.getElementById(`button1`)
  }else if(allProducts[i].productId == 3){
    eventButton = document.getElementById(`button2`)
  }else if(allProducts[i].productId == 4){
    eventButton = document.getElementById(`button3`)
  }else if(allProducts[i].productId == 5){
    eventButton = document.getElementById(`button4`)
  }else if(allProducts[i].productId == 6){
    eventButton = document.getElementById(`button5`)
  }else if(allProducts[i].productId == 7){
    eventButton = document.getElementById(`button6`)
  }else if(allProducts[i].productId == 8){
    eventButton = document.getElementById(`button7`)
  }


  eventButton.addEventListener('click', async () => {

    cart.num.push(allProducts[i].price);
    cart.name.push(allProducts[i].productName);
    cart.itemNum += 1;
  
    console.log('This is the Cart: ')
    console.log(cart)
  
    localStorage.setItem('cartStorage', JSON.stringify(cart));
  
    console.log('this is the tempCart')
    console.log(localStorage.getItem('cartStorage'));
  
    updateInv = {
      quan: allProducts[i].quantity,
      pId: allProducts[i].productId
    }
  

    try {
  
      const rawResponse = await fetch('http://localhost:8080/app/product', {
  
  
        method: 'PUT',
  
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ quantity: updateInv.quan, productId: updateInv.pId })
      });
      console.log(JSON.stringify({ quantity: updateInv.quan, productId: updateInv.pId }))
  
      const content = await rawResponse.json();
 
  
    } catch (error) {
  
      console.log(error)
    }
  
  
    allProducts[i].quantity = allProducts[i].quantity - 1
    console.log(allProducts[i].quantity)
  
  })
}
  

async function updateCartNum(event) {

  let cartDisplayNum = document.getElementById("cartNumber")
  cartDisplayNum.innerHTML = cart.itemNum + 1;
}




