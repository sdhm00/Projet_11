const baseUrl = "http://localhost:3001/api/v1"

//  post login ( Login )

export const getToken= async(email, password) => {
    console.log(email, password)
    
    const apiLogin = await fetch(baseUrl + "/user/login", {
      method : "POST",
      headers : {"Content-type" : "application/json"},
      body: JSON.stringify({ "email" : email, "password" : password }),
    })

    return apiLogin.json();
};

// get Login ( user profile )

export const getLogin = async(token) => {
console.log(token, "this token")
  const loginId = await fetch(baseUrl + "/user/profile", {
    method : "POST",
    headers : { "Content-Type": "application/json", Authorization : `Bearer ${token}` },
  })

  return loginId.json();
};

// get User profile

export const modifProfile = async(token, username) => {

  const usernameProfile = await fetch(baseUrl + "/user/profile", {
    method : "PUT",
    headers : { "Content-Type": "application/json", Authorization : `Bearer ${token}` },
    body : JSON.stringify({"username" : username}),
  })

  console.log(userProfile, "userprofile")

  return usernameProfile.json();
}