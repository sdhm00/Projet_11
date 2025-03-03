import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { signOut } from '../../features/userSlice';

function Header() {
  const loged = useSelector(state => state.userProfile.loged)

  const signIn = document.getElementById("signIn")
  const signOout = document.getElementById("signOut")

  const navigate = useNavigate()

  const dispatch = useDispatch()

  if (loged === true) {
    signIn.style.display = "none"
    signOout.style.display = "unset"
  }

  const logedOut = function(event) {
    event.preventDefault();

    dispatch(signOut())

    localStorage.removeItem("token")

    navigate("/")

    signIn.style.display = "flex"
    signOout.style.display = "none"
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
        <div className="main-nav-item" id="signOut" onClick={logedOut}><i className="fa fa-user-circle"></i>Sign Out</div>
      </Link>
    </nav>
  );
}
  
export default Header;