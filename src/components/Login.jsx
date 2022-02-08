import React, { useState } from 'react';
import '../css/login.css';
import SignUp from './SignUp';

function Login() {

    const [signIn, setSignIn] = useState(false);

    const showSignUp = (e) => {
        e.preventDefault();
        setSignIn(true);
    }

    return (
        <div className='login'>
            <div className="login__header">
                <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="netflix logo" className='login__logo' />

                <button className="login__button">Sign In</button>
            </div>
            <div className="login__body">
                {
                    signIn ? (<SignUp />) : (
                        <>
                            <h1>Unlimited movies, TV shows and more.</h1>
                            <h2>Watch anywhere. Cancel anytime.</h2>
                            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                            <form className="login__form">
                                <input type="text" placeholder='Email address' />
                                <button onClick={(e) => showSignUp(e)}>Get Started &gt;</button>
                            </form>
                        </>
                    )
                }
            </div>
            <div className="login__gradient"></div>
        </div>
    );
}

export default Login;
