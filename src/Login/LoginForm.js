import React, { Component } from 'react';
import { Button, Container, Form, Header  } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { userActions } from '../actions';

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

        dispatch(
            userActions.login(
                user.login, 
                user.password
            )
        );
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


// Construire ces méthodes en dehors de la class
const mapStateToProps = (state) => {
    return {
        login: state.login,
        password: state.password
    }
}

// Grace à mapStateToProps nous avons abonné notre app au store
// Ceci va de paire avec le Provider
export default connect(mapStateToProps)(LoginForm);