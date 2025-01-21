import { Link } from 'react-router-dom'

function Header() {
  const signIn = document.getElementById("signIn");
  const signOut = document.getElementById("signOut");
  const token = localStorage.getItem("token");

  const currentUrl = window.location.pathname;

  console.log(currentUrl, "current url")

  // signOut.style.display = "none"

  // if (currentUrl.includes('/User')) {

  //   signOut.style.display = "unset"
  // }

  // if (localStorage !== null && token !== null) {
  //   signOut.style.display = "none";
  // }
  // else {
  //   signIn.style.display = "none";
  //   signOut.style.display = "unset";
  // }
  return (
    <nav className="main-nav">
      <Link to="/">
        <div className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src="./../../../designs/img/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </div>
      </Link>
      <Link to="/SignIn">
        <div className="main-nav-item" id="signIn" style={{display : "flex"}}><i className="fa fa-user-circle"></i>Sign In</div>
        <div className="main-nav-item" id="signOut" style={{display : "none"}}><i className="fa fa-user-circle"></i>Sign Out</div>
      </Link>
    </nav>
  );
}
  
export default Header;