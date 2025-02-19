const baseUrl = "http://localhost:3001/api/v1"

//  post login ( Login )

export const getToken= async(email, password) => {
    console.log(email, password)
    
    const apiLogin = await fetch(baseUrl + "/user/login", {
      method : "POST",
      headers : {"Content-type" : "application/json"},
      body: JSON.stringify({ "email" : email, "password" : password }),
    })
    
    console.log(apiLogin, "Api login")

    return apiLogin.json();
};

// get Login ( user profile )

export const getLogin = async(token) => {
console.log(token, "this token")
  const loginId = await fetch(baseUrl + "/user/profile", {
    method : "POST",
    headers : { "Content-Type": "application/json", Authorization : `Bearer ${token}` },
  })

  console.log(loginId, "Api login Id")

  return loginId.json();
};

// get User profile

// async function getProfile(getLogin) {

//   const userProfile = await fetch(baseUrl + "")

// }