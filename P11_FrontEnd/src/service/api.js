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

export default getToken;

// get Login ( user profile )

async function getLogin(getToken, localStorage) {
  console.log(getToken, localStorage.id)

  const loginId = await fetch()
}

// const init = () => {
//   getToken();
//   getLogin();
// }

// export default init;

// get User profile
