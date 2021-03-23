import {React, useState} from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        // some fancy firebase stuff
    }

    const register = e => {
        e.preventDefault();
        
        // do some fancy firebase register stuff
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
