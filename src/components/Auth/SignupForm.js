import React, { Component } from 'react';
import { Button, Container, Form, Header } from 'semantic-ui-react/dist/commonjs';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions/user.actions';

class SignupForm extends Component {

    handleSubmit = (formProps) => {
        this.props.signup(formProps, () => {
            console.log('user saved !!')
            // this.props.history.push('/dashboard');
        })
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <Container>
                <Header as='h1'>Subscribe</Header>
                <Form onSubmit={handleSubmit(this.handleSubmit)}>
                    <Form.Field>
                        <label>First Name</label>
                        <Field
                            name="firstName"
                            type="text"
                            component="input"
                            autoComplete="none"
                        />
                     </Form.Field>
                    <Form.Field>
                        <label>Last Name</label>
                        <Field
                            name="lastName"
                            type="text"
                            component="input"
                            autoComplete="none"
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Email</label>
                        <Field
                            name="mail"
                            type="email"
                            component="input"
                            autoComplete="none"
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Login</label>
                        <Field
                            name="login"
                            type="text"
                            component="input"
                            autoComplete="none"
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Password (should contain at least 1 digit, 1 lower case, 1 upper case and between 8 and 30 char)</label>
                        <Field
                            name="password"
                            type="password"
                            component="input"
                            autoComplete="none"
                        />
                    </Form.Field>
                    {/* Display an error message if a field is not correct */}
                    <Button> Sign up ! </Button>
                </Form>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.signup.errorMessage }
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: 'signup' })
)(SignupForm);