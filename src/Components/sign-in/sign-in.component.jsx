import React, { Component } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.conponent';

//import {signInWithGoogle} from '../../firebase/firebase.util';

class SignIn extends Component {
    constructor(props){
        super(props);
        this.state= {
            email: '',
            password: ''
        }
    }
handleSubmit= event => {
    event.preventDefault();

    this.setState({email: '' , password: ''})
}
handleChange = event=>{
    const{value,name} = event.target;
    this.setState({[name]: value});
}
    render() {
        return (
            <div className='sign-in'>
                <h2>I already Have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        label='Email'
                        required
                    />

                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label='Password'
                        required/>
                    <CustomButton type='submit' >
                        sign in
                    </CustomButton>
                   
                </form>
            </div>
        );
    }
}

export default SignIn;