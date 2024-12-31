import { Navigate } from 'react-router-dom';

function SignIn() {
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                {/* <p id="errorMessage">Email ou mot de passe invalide. Veuillez réessayer.</p> */}
                <form id="form">
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="username" id="username" name="username" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" name="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    {/* <a href="./user.html" className="sign-in-button" id="sign-in">Sign In</a> */}
                    {/* <input type="submit" value="Se connecter" id="connexion"></input> */}
                    <button type="submit" value="Sign In" className="sign-in-button" id="sign-in">Sign In</button>
                </form>
            </section>
        </main>
    );
}
  
export default SignIn;