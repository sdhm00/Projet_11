import { useState, React } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLogin, getToken } from '../../service/api';
// import { getToken, getLogin } from '../../service/api';

function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async function(event) {
        event.preventDefault();
        console.log("click");
        // const token = await getToken(email, password);
        const token = await getToken(email, password)

        console.log(token, "token infos" )

        localStorage.removeItem("token")
        localStorage.setItem("token", token);

        // const login = await getLogin(token);
        const login = await getLogin(token)
        console.log(login, " login")

        // // if(localStorage.id === localStorage.token){
        //     navigate("/User")
        // }
        // else {
        //     errorMessage.style.display = "unset";
        //     errorMessage.style.opacity = 1
        // }
    }
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form id="form" onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input value={email} onChange={(e)=> setEmail(e.target.value)} type="username" id="username" name="username" autoComplete="off"/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" id="password" name="password" />
                    </div>
                    <p id="errorMessage">Email ou mot de passe invalide. Veuillez réessayer.</p>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" name="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button type="submit" value="Sign In" className="sign-in-button" id="sign-in" >Sign In</button>
                </form>
            </section>
        </main>
    );
}
  
export default SignIn;