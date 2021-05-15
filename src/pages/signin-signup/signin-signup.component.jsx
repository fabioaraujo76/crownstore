import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import './signin-signup.style.scss'

const SignInSignUpPage = () => (
    <div className='signin-signup'>
        <SignIn/>
        <SignUp/> 
    </div>
);
    

export default SignInSignUpPage;