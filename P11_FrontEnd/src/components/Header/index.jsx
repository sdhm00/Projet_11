import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { signOut, userProfile } from '../../features/userSlice';


function Header() {
  const loged = useSelector(state => state.userProfile.loged)

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const dataUser = useSelector((state) => state.userProfile.userName)
  console.log(dataUser, "user profile firstname data")

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
            <div className='signout'>
              {dataUser}<i className="fa fa-user-circle"></i>
              <NavLink to="/">
                <div className="main-nav-item" id="signOut" onClick={logedOut}>Sign Out</div>
              </NavLink>
            </div>
          ) : (
            <Link to="/SignIn"><div className="main-nav-item" id="signIn">Sign In</div></Link>
          )}
        </div>
        
    </nav>
  );
}
  
export default Header;