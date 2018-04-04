import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import LoginForm from './LoginForm';

class Login extends Component {

    handleLogin = () => {
        return false;
    }

    render() {

        const { redirect } = this.handleLogin;
        
        if (redirect) {
            return <Redirect to="/dashboard"/>;              
        }

        return <LoginForm/>;
    }

}

export default Login;