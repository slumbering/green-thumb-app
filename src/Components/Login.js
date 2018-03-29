import React, { Component } from 'react';
import { Button, Container, Form, Header  } from 'semantic-ui-react';

class Login extends Component {

    handleSubmit = (event) => {
        console.log('form has been submitted');
    }

    render() {
        return (
            <Container>
                <Header as='h1'>Login</Header>
                <Form>
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

export default Login;