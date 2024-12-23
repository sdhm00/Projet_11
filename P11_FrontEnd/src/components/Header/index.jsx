import "./../../../designs/css/main.css"
import { Link } from 'react-router-dom'


function Header() {
  return (
    <nav class="main-nav">
      <Link to="/">
        <a class="main-nav-logo">
          <img
            class="main-nav-logo-image"
            src="./img/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 class="sr-only">Argent Bank</h1>
        </a>
      </Link>
      <Link to="/signIn">
      <div>
        <a class="main-nav-item">
          <i class="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
      </Link>
    </nav>
  );
}
  
export default Header;