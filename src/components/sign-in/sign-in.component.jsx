import React from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomeButton from '../../components/custome-button/custome-button.component';

import './sign-in.styles.scss';

class SignIn extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            email : '',
            password: ''
        }

    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log("submitted")
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name] : value
        })
    }

    render(){
        return(
            <div className = 'sign-in'>
                <h2>I have account already</h2>
                <span>Please log in with email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange} label='Email'  value={this.state.email} type='email' name='email' required />  
                    <FormInput handleChange={this.handleChange} label='Password' value={this.state.password} type='password' name='password' required />
                    <CustomeButton type="submit">Sign In</CustomeButton>
                </form>

            </div>
        )
    }

}

export default SignIn;