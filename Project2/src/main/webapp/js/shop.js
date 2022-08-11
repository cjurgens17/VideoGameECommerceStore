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




let button0 = document.getElementById("button0");

button0.addEventListener('click', async() => {

        cart.num.push(allProducts[6].price);
        cart.name.push(allProducts[6].productName);
        cart.itemNum += 1;


        console.log('This is the Cart: ')
        console.log(cart)
        
        

        localStorage.setItem('cartStorage', JSON.stringify(cart));

        

        console.log('this is the tempCart')
        console.log(localStorage.getItem('cartStorage'));



        updateInv = {
            quan: allProducts[6].quantity - 1,
            pId: allProducts[6].productId
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
             
             
           
             
         
           }catch(error){
         
             console.log(error)
           }


           allProducts[6].quantity = allProducts[6].quantity -1
           console.log(allProducts[6].quantity)
        

})

let button1 = document.getElementById("button1");

button1.addEventListener('click', async() => {



        cart.num.push(allProducts[3].price);
        cart.name.push(allProducts[3].productName);
        cart.itemNum += 1;

        console.log('This is the Cart: ')
        console.log(cart)

        localStorage.setItem('cartStorage', JSON.stringify(cart));


        


        console.log('this is the tempCart')
        console.log(localStorage.getItem('cartStorage'));

        updateInv = {
            quan: allProducts[3].quantity - 1,
            pId: allProducts[3].productId
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
             
             
           
             
         
           }catch(error){
         
             console.log(error)
           }


           allProducts[3].quantity = allProducts[3].quantity -1
           console.log(allProducts[3].quantity)
        

   

})

let button2 = document.getElementById("button2");

button2.addEventListener('click', async() => {

    

    cart.num.push(allProducts[4].price);
    cart.name.push(allProducts[4].productName);
    cart.itemNum += 1;

    console.log('This is the Cart: ')
    console.log(cart)

    localStorage.setItem('cartStorage', JSON.stringify(cart));


    

    console.log('this is the tempCart')
    console.log(localStorage.getItem('cartStorage'));

    updateInv = {
        quan: allProducts[4].quantity - 1,
        pId: allProducts[4].productId
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
         
         
       
         
     
       }catch(error){
     
         console.log(error)
       }


       allProducts[4].quantity = allProducts[4].quantity -1
       console.log(allProducts[4].quantity)
        
   

})

let button3 = document.getElementById("button3");

button3.addEventListener('click', async() => {

        cart.num.push(allProducts[1].price);
        cart.name.push(allProducts[1].productName);
        cart.itemNum += 1;

        console.log('This is the Cart: ')
        console.log(cart)

        localStorage.setItem('cartStorage', JSON.stringify(cart));


        

        console.log('this is the tempCart')
        console.log(localStorage.getItem('cartStorage'));



        updateInv = {
            quan: allProducts[1].quantity - 1,
            pId: allProducts[1].productId
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
             
             
           
             
         
           }catch(error){
         
             console.log(error)
           }


           allProducts[1].quantity = allProducts[1].quantity -1
           console.log(allProducts[1].quantity)

})

let button4 = document.getElementById("button4");

button4.addEventListener('click', async() => {

    cart.num.push(allProducts[2].price);
    cart.name.push(allProducts[2].productName);
    cart.itemNum += 1;

    console.log('This is the Cart: ')
    console.log(cart)

    localStorage.setItem('cartStorage', JSON.stringify(cart));


    

    console.log('this is the tempCart')
    console.log(localStorage.getItem('cartStorage'));


    updateInv = {
        quan: allProducts[2].quantity - 1,
        pId: allProducts[2].productId
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
         
         
       
         
     
       }catch(error){
     
         console.log(error)
       }


       allProducts[2].quantity = allProducts[2].quantity -1
       console.log(allProducts[2].quantity)

})

let button5 = document.getElementById("button5");

button5.addEventListener('click', async() => {

    cart.num.push(allProducts[0].price);
    cart.name.push(allProducts[0].productName);
    cart.itemNum += 1;

    console.log('This is the Cart: ')
    console.log(cart)

    localStorage.setItem('cartStorage', JSON.stringify(cart));


    

    console.log('this is the tempCart')
    console.log(localStorage.getItem('cartStorage'));



    updateInv = {
        quan: allProducts[0].quantity - 1,
        pId: allProducts[0].productId
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
         
         
       
         
     
       }catch(error){
     
         console.log(error)
       }


       allProducts[0].quantity = allProducts[0].quantity -1
       console.log(allProducts[0].quantity)

})

let button6 = document.getElementById("button6");

button6.addEventListener('click', async() => {

    cart.num.push(allProducts[5].price);
    cart.name.push(allProducts[5].productName);
    cart.itemNum += 1;

    console.log('This is the Cart: ')
    console.log(cart)

    localStorage.setItem('cartStorage', JSON.stringify(cart));


    

    console.log('this is the tempCart')
    console.log(localStorage.getItem('cartStorage'));



    updateInv = {
        quan: allProducts[5].quantity - 1,
        pId: allProducts[5].productId
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
         
         
       
         
     
       }catch(error){
     
         console.log(error)
       }


       allProducts[5].quantity = allProducts[5].quantity -1
       console.log(allProducts[5].quantity)

})

let button7 = document.getElementById("button7");

button7.addEventListener('click', async() => {


        cart.num.push(allProducts[7].price);

        cart.name.push(allProducts[7].productName);
        cart.itemNum += 1;

        console.log('This is the Cart: ')
        console.log(cart)

        localStorage.setItem('cartStorage', JSON.stringify(cart));

        

        console.log('this is the tempCart')
        console.log(localStorage.getItem('cartStorage'));



        updateInv = {
             quan: allProducts[7].quantity - 1,
             pId: allProducts[7].productId
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
              
              
            
              
          
            }catch(error){
          
              console.log(error)
            }


            allProducts[7].quantity = allProducts[7].quantity -1
            console.log(allProducts[7].quantity)
            
        });




        async function updateCartNum(event){

            let cartDisplayNum = document.getElementById("cartNumber")
            cartDisplayNum.innerHTML = cart.itemNum + 1;
        }
        



