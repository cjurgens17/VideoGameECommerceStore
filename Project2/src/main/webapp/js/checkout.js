let checkButton = document.getElementById("checkoutBtn");

checkButton.addEventListener("click", async() => {

    const rawResponse = await fetch('http://localhost:8080/app/cart', {

        method: 'POST',

        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({productName: "spicyNuggets" , price:5 })
      });
      const content = await rawResponse.json();
    
      console.log(content);

      // ${cart[0].productName}

      // productName
      // price
    });

    



      


