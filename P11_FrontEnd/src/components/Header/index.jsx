import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className="main-nav">
      <Link to="/">
        <a className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src="./../../../designs/img/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
      </Link>
      <Link to="/signIn">
      <div>
        <a className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
      </Link>
    </nav>
  );
}
  
export default Header;