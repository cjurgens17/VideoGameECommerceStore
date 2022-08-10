let checkButton = document.getElementById("checkoutBtn");
let tempCart = localStorage.getItem('cartStorage')
let currentcart = JSON.parse(tempCart)


console.log(currentcart)

let products = localStorage.getItem('productStorage')
let allProducts = JSON.parse(products)
console.log(allProducts)


let pName = "";
let stringPrice = 0;
let productNum = currentcart.itemNum;




for(let i = 0; i < currentcart.name.length; i++) {
 

  

  pName += `${currentcart.name[i]} `
  
  

}


function cartTotal(){
for(let j = 0; j < currentcart.num.length; j++) {
  
    
  stringPrice += currentcart.num[j] + stringPrice;


  
    
}
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

   
    


    

      
function addTable() {
  var myTableDiv = document.getElementById("myDynamicTable");

  var table = document.createElement('TABLE');
  table.border = '3';

  var tableBody = document.createElement('TBODY');
  table.appendChild(tableBody);
 
  for (var i = 0; i < productNum ; i++) {
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);
    var button = document.createElement('button');
    button.type = 'button';
    button.innerHTML = 'Remove Item';
    button.className = 'btn-styled';
    tr.appendChild(button)
    console.log(button)
    
    

    for (var j = 0; j < 1 ; j++) {
      var td = document.createElement('TD');
      td.width = '800';
      td.appendChild(document.createTextNode("Item: " + currentcart.name[i] + "   Price: " + currentcart.num[j]));
      tr.appendChild(td);
      
      
    }
  }
  myTableDiv.appendChild(table);


  button.onclick =  async function() {
    console.log("Hello World")

    var updateInv = {
      quan: null,
      pId: null
 }

 for (let i = 0; i < currentcart.name.length; i++) {
  

  switch(currentcart.name[i]) {
    case allProducts[0].productName:
      updateInv.quan = allProducts[0].quantity + 1
      updateInv.pId = allProducts[0].productId
      break;
    case allProducts[1].productName:
      updateInv.quan = allProducts[1].quantity + 1
      updateInv.pId = allProducts[1].productId
      break;
    case allProducts[2].productName:
        updateInv.quan = allProducts[2].quantity + 1
        updateInv.pId = allProducts[2].productId
        break;
    case allProducts[3].productName:
          updateInv.quan = allProducts[3].quantity + 1
          updateInv.pId = allProducts[3].productId
          break;
    case allProducts[4].productName:
            updateInv.quan = allProducts[4].quantity + 1
            updateInv.pId = allProducts[4].productId
            break;
    case allProducts[5].productName:
              updateInv.quan = allProducts[5].quantity + 1
              updateInv.pId = allProducts[5].productId
              break;
    case allProducts[6].productName:
                updateInv.quan = allProducts[6].quantity + 1
                updateInv.pId = allProducts[6].productId
                break;
    case allProducts[7].productName:
                  updateInv.quan = allProducts[7].quantity + 1
                  updateInv.pId = allProducts[7].productId
                  break;
    default:
        break;
  }
}

 



   
   
     try{
   
     const rawResponse = await fetch('http://localhost:8080/app/product', {
        
   
         method: 'PUT',
   
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({quantity: updateInv.quan, productId: updateInv.pId})
       });
       console.log(JSON.stringify({quantity: updateInv.quan, productId: updateInv.pId}))
      
       const content = await rawResponse.json();
       console.log(content)
       
       
     
       
   
     }catch(error){
   
       console.log(error)
     }


     

    //  window.location.replace("cart.html")
    
};



}
addTable();











   


    




      






    



      








