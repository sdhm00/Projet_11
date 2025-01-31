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

export default getToken;

// get Login

// get User profile

// async function getUser () {

//   const userToken = await getLogin

  
// }

// const init = () => {
//   getLogin ();
// }
// export default init;