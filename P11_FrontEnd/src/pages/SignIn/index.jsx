import { useState, React } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLogin, getToken } from '../../service/api';
import { useDispatch } from 'react-redux';
import { signIn, userProfile } from '../../features/userSlice';

function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()
    
    const errorMessage = document.querySelector(".error_message")

    const navigate = useNavigate()

    const handleSubmit = async function(event) {
        event.preventDefault();
        console.log("click");

        const userToken = await getToken(email, password);

        console.log(userToken, "user token infos" )

        localStorage.removeItem("token")

        if (userToken.status === 200) {
            localStorage.setItem("token", userToken.body.token);

            const token = localStorage.getItem("token")
            const login = await getLogin(token)
        
            if(login.status === 200) {
                dispatch(userProfile(login.body.firstName, login.body.lastName, login.body.userName))
                dispatch(signIn())

                console.log("user infos name", login.body, login.body.firstName, login.body.lastName,login.body.userName)
                navigate("/User")
            }
        } else {
            errorMessage.style.display = "unset";
            errorMessage.style.opacity = 1
        }
    }
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
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
                    <p className="error_message">Email ou mot de passe invalide. Veuillez réessayer.</p>
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