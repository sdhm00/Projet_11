import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { signOut } from '../../features/userSlice';

function Header() {
  const loged = useSelector(state => state.userProfile.loged)

  console.log(loged, "loged ? ")

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const logedOut = function(event) {
    event.preventDefault();

    dispatch(signOut())

    localStorage.removeItem("token")

    navigate("/")

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
      
        <div>
          {loged ? (
            <NavLink to="/"><div className="main-nav-item" id="signOut" onClick={logedOut}><i className="fa fa-user-circle"></i>Sign Out</div></NavLink>
          ) : (
            <Link to="/SignIn"><div className="main-nav-item" id="signIn"><i className="fa fa-user-circle"></i>Sign In</div></Link>
          )}
        </div>
        
    </nav>
  );
}
  
export default Header;