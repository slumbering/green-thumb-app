import React, { Component } from 'react';
import { Button, Container, Form, Header, Input } from 'semantic-ui-react';

class Subscription extends Component {
    render() {
        return (
            <Container>
                <Header as='h1'>Subscribe</Header>
                <Form>
                    <Form.Field id="form-input-control-login" control={Input} label='Login' placeholder='Login'/>
                    <Form.Field id="form-input-control-password" control={Input} label='Password' placeholder='Password'/>
                    <Form.Field id="form-input-control-password-repeat" control={Input} label='Password again' placeholder='Password again'/>
                    <Button type='submit'>Submit</Button>
                </Form>
            </Container>
        )
    }
}

export default Subscription;