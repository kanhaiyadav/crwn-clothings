import React from "react";
import './signin-form.component.styles.scss';
import FormInput from "../formInput/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";


class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ email: '', password: '' });
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form
                    onSubmit={this.handleSubmit}
                >
                    <FormInput
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        label={'Password'}
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Submit</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;