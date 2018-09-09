import React, { Component } from 'react';
import { BrowserRouter as Redirect} from 'react-router-dom';
import LoginForm from './LoginForm';

class Login extends Component {

    render() {
        return <LoginForm/>;
    }

}

export default Login;