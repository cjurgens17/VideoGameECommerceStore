async function loginUser(event){
  event.preventDefault();

<<<<<<< HEAD
  let username = document.getElementById('')
=======
>>>>>>> c65ee3d0fcc5e545da4a7f5efb4760ec9759b10e

  try{

  const rawResponse = await fetch('http://localhost:8080/app/login', {


      method: 'POST',

      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: document.getElementById('username-sign-in').value,
<<<<<<< HEAD
      password: document.getElementById('password-sign-in').value})
  });
    
    console.log(JSON.stringify({username: document.getElementById('username-sign-in').value,
    password: document.getElementById('password-sign-in').value}))
=======
      password: document.getElementById('passwordsignin').value})
    });
    console.log(JSON.stringify({username: document.getElementById('username-sign-in').value,
    password: document.getElementById('passwordsignin').value}))
>>>>>>> c65ee3d0fcc5e545da4a7f5efb4760ec9759b10e

    const content = await rawResponse.json();



    console.log(content);

    localStorage.setItem('currentUser', JSON.stringify(content))

    window.location.replace("shop.html")

  }catch(error){

    console.log(error)
  }
  };


  async function getProducts(event){
    event.preventDefault();

    try{

<<<<<<< HEAD
      const raw_response = await fetch('http://localhost:8080/app/products')

      if (!raw_response.ok){
=======
      const raw_response = await fetch('http://localhost:8080/app/products');

      if(!raw_response.ok){
>>>>>>> c65ee3d0fcc5e545da4a7f5efb4760ec9759b10e
          throw new Error(raw_response.status)
      }

      const json_data = await raw_response.json();



      localStorage.setItem('productStorage', JSON.stringify(json_data));


<<<<<<< HEAD
=======




>>>>>>> c65ee3d0fcc5e545da4a7f5efb4760ec9759b10e
    }catch(error){
      console.log(error)
    }

  };