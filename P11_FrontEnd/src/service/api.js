const baseUrl = "http://localhost:3001/api/v1"

// get token

//  post login

async function getLogin(email, password){
    console.log(email, password)
    
    const apiLogin = await fetch(baseUrl + "/user/login", {
      method : "POST",
      headers : {"Content-type" : "application/json"},
      body: JSON.stringify({ "email" : email, "password" : password })
    })
    console.log(apiLogin, "Api login")

    if (apiLogin.ok === true) {
      return apiLogin.json();
    }
}

export default getLogin;

// post modif user

async function postModif(userToken) {
  
}