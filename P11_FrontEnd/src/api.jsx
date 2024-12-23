// Connexion API //

const baseUrl = "http://localhost:3001/api-docs"

// Fin de la connexion à l'API //

// Connection à l'API pour obtenir le Token

async function getLogin(email, password){
    console.log(email, password)
    const apiLogin = await fetch(baseUrl + "/users/login", {
      method : "POST",
      headers : {"Content-type" : "application/json"},
      body: JSON.stringify({ "email" : email, "password" : password })
    })
    console.log(apiLogin)
    if (apiLogin.ok === true) {
      return apiLogin.json();
    }
}

// Fin Connection à l'API pour obtenir le Token