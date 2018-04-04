import React, { Component } from 'react';
import { Button, Container, Form, Header  } from 'semantic-ui-react';

class LoginForm extends Component {

    handleSubmit = (event) => {
        this.setState = true;
        console.log(this.state);
    }

    render() {
        return (
            <Container>
                <Header as='h1'>Login</Header>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <Form.Input label='Enter username' type='text' />
                        <Form.Input label='Enter Password' type='password' />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
                <a href="/subscribe"> Not subscribde yet ? Create an account </a>
            </Container>
        )
    }
}

export default LoginForm;