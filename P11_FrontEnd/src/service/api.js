const baseUrl = "http://localhost:3001/api/v1"

//  post login ( Login )

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

// post modif user ( SignUp )

async function postModif(userToken) {
  
}

// get Token 

async function getToken (email, id) {
  console.log(email, id, "email and id")

  const apiToken = await fetch (baseUrl + "/user/profile", {
    method : "GET",
    headers : {"Content-type" : "application/json"},
    body : JSON.stringify({ "email" : email, "id" : id})
  })

  console.log(apiToken, "Api token")

  if (apiToken.ok === true) {
    return apiToken.json();
  }
}


// get User profile

// async function getUser () {

//   const userToken = await getLogin

  
// }

// const init = () => {
//   getLogin ();
//   getToken ();
// }
// export default init;