async function loginUser(event){
  event.preventDefault();


  


  try{

  const rawResponse = await fetch('http://localhost:8080/app/login', {


      method: 'POST',

      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: document.getElementById('username-sign-in').value,

      password: document.getElementById('passwordsignin').value})
  });
    
    console.log(JSON.stringify({username: document.getElementById('username-sign-in').value,
    password: document.getElementById('passwordsignin').value}))

      
   
    

   

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


      const raw_response = await fetch('http://localhost:8080/app/products')

      if (!raw_response.ok){

          throw new Error(raw_response.status)
      }

      const json_data = await raw_response.json();



      localStorage.setItem('productStorage', JSON.stringify(json_data));



    }catch(error){
      console.log(error)
    }

  };