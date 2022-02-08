import React, { useRef } from 'react';
import '../css/login.css';
import { auth } from '../firebase';

function SignUp() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(authUser => {
            console.log(authUser)
        }).catch(err => {
            alert(err.message)
        })
    }

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(authUser => {
            console.log(authUser)
        }).catch(err => {
            alert(err.message)
        })
    }
    return (
        <div className='signUpScreen'>
            <form>
                <h1>Sign Up</h1>
                <input type="email" name="" id="" placeholder='Email' ref={emailRef} />
                <input type="password" placeholder='Password' ref={passwordRef} />
                <button onClick={signIn}>Sign In</button>

                <h4>New to Netflix, <span onClick={register}>Sign Up Now.</span></h4>
            </form>
        </div>
    );
}

export default SignUp;
