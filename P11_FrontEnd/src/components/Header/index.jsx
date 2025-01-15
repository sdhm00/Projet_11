import { Link } from 'react-router-dom'

function Header() {
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
        <div className="main-nav-item"><i className="fa fa-user-circle"></i>Sign In</div>
      </Link>
    </nav>
  );
}
  
export default Header;