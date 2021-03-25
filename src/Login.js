import {React, useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    
    }

    const register = e => {
        e.preventDefault();
        
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth);
            if (auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className= 'login'> 
            <Link to ='/'>
            <img className="login__logo" 
            src='https://cdn.freebiesupply.com/images/large/2x/amazon-logo-transparent.png' alt=""
            />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type= "submit" className= "login__signInbutton" onClick={signIn}>
                        Sign in
                    </button>
                </form>
                
                <p>
                    By signing in you agree to AMAZON FAKE CLONE's
                    conditions of use & Sale. Please see our Privacy Notice, 
                    our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className="login__registerButton" onClick={register}> Create your Amazon Account</button>


            </div>
        </div>
    )
}

export default Login
