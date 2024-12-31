const baseUrl = "http://localhost:3001/api-docs/"

// get token

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

function installConnexion(){
  const form = document.getElementById("form");
  const errorMessage = document.getElementById("errorMessage");

  form.addEventListener("submit",async function(event) {
    event.preventDefault();
    const usernameInput = document.getElementById("username").value;
    console.log(usernameInput, " username works")

    const passwordInput = document.getElementById("password").value;
    console.log(passwordInput, " password works")

    const login = await getLogin(usernameInput, passwordInput);
    console.log(login, " login works")

    localStorage.removeItem("token")

    try {
      const token = login.token;
      console.log(token, "token works")

      localStorage.setItem("token", token);
      window.location.pathname = "User/:id";
    }
    catch (error) {
      errorMessage.style.opacity = 1
    }
  });
};

const init = ()=>{
  installConnexion()
}
init();

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