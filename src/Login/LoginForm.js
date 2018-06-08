import React, { Component } from 'react';
import { Button, Container, Form, Header  } from 'semantic-ui-react';
import axios from 'axios';

class LoginForm extends Component {

    state = {
        login: '',
        password: ''
    }

    handleChange = (event, data) => {
        if(data.name == "login") {
            this.setState({
                login: event.target.value
            })
        }
        if(data.name == "password") {
            this.setState({
                password: event.target.value
            })
        }
    };

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            login: this.state.login,
            password: this.state.password
        };

        axios.post(`http://localhost:3000/login`,  user )
        .then(resp => {
            const token = resp.data.token;
            localStorage.setItem('user-token', token);
        })
        .catch(function(error){
            console.log('LOGIN Failed - user.actions.js', error);
            localStorage.removeItem('user-token') // if the request fails, remove any possible user token if possible
        })
    }

    render() {
        return (
            <Container>
                <Header as='h1'>Login</Header>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <Form.Input name="login" label='Enter username' type='text' onChange={this.handleChange}/>
                        <Form.Input name="password" label='Enter Password' type='password' onChange={this.handleChange}/>
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
                <a href="/subscribe"> Not subscribde yet ? Create an account </a>
            </Container>
        )
    }
}

export default LoginForm;