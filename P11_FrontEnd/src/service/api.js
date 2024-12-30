const baseUrl = "http://localhost:3001/api-docs/"

// get token


//  post login

async function getLogin(username, password){
    console.log(username, password)
    const apiLogin = await fetch(baseUrl + "/users/login", {
      method : "POST",
      headers : {"Content-type" : "application/json"},
      body: JSON.stringify({ "username" : username, "password" : password })
    })
    console.log(apiLogin)
    if (apiLogin.ok === true) {
      return apiLogin.json();
    }
}

// post modif user