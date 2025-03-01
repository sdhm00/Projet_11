import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

function Header() {
  const loged = useSelector(state => state.userProfile.loged)

  const signIn = document.getElementById("signIn")
  const signOut = document.getElementById("signOut")


  if (loged === true) {
    signIn.style.display = "none"
    signOut.style.display = "unset"
  }

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
        <div className="main-nav-item" id="signIn"><i className="fa fa-user-circle"></i>Sign In</div>
        <div className="main-nav-item" id="signOut"><i className="fa fa-user-circle"></i>Sign Out</div>
      </Link>
    </nav>
  );
}
  
export default Header;