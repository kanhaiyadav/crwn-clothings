import React from "react";
import './singin_singnup-page.component.style.scss';
import SignIn from "../../components/singin-form/signin-form.component";
import SignUp from "../../components/signup/sign-up.component";

const SignInSignUpPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
)

export default SignInSignUpPage;