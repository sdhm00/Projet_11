const baseUrl = "http://localhost:3001/api/v1"

//  post login ( Login )

async function getToken(email, password){
    console.log(email, password)
    
    const apiLogin = await fetch(baseUrl + "/user/login", {
      method : "POST",
      headers : {"Content-type" : "application/json"},
      body: JSON.stringify({ "email" : email, "password" : password })
    })
    
    console.log(apiLogin, "Api login")

    if (apiLogin.ok === true) {
      return localStorage.id;

    }
}

// export default getToken;

// get Login ( user profile )

async function getLogin(id) {

  const loginId = await fetch(baseUrl + "/user/profile", {
    method : "GET",
    headers : { Authorization : "Bearer " + id },
    body: JSON.stringify({ "email" : email })
  })

  console.log(loginId, "login Id")

  if (loginId.ok === true) {
    return loginId.json();
  }
}

// get User profile

async function getProfile(getLogin) {

}

const init = () => {
  getToken();
  getLogin();
  getProfile();
}

export default init;