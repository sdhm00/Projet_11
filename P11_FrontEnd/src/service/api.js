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
      return apiLogin.json();
      
    }
}

// export default getToken;

// get Login ( user profile )

async function getLogin(login, localStorage) {
  const login = await getToken(email, password);
  const token = login.body.token;

  localStorage.removeItem("token")

  if (login.ok === true) {
    return localStorage.setItem("token", token);
  }
  
}

// export default getLogin;

const init = () => {
  getToken();
  getLogin();
}

export default init;

// get User profile
