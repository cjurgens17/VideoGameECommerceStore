let checkButton = document.getElementById("checkoutBtn");

checkButton.addEventListener("click", async() => {

    const rawResponse = await fetch('http://localhost:8080/app/cart', {

        method: 'POST',

        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({items: 'PlayStation', itemNum: 1})
      });
      const content = await rawResponse.json();
    
      console.log(content);
    });