import React, { Component } from 'react';
import { Button, Container, Form, Header  } from 'semantic-ui-react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { history } from '../helpers';
import * as actions from '../actions/user.actions';

class LoginForm extends Component {

    handleSubmit = (formProps) => {
        this.props.login(formProps, () => {
            history.push('/dashboard');
        });
    }

    render() {
        // const { alert } = this.props
        const { handleSubmit } = this.props;
        return (
            <Container>
                <Header as='h1'>Sign in !</Header>
                <div>{this.props.errorMessage}</div>
                <Form onSubmit={handleSubmit(this.handleSubmit)}>
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
                        <label>Password</label>
                        <Field
                                name="password"
                                type="password"
                                component="input"
                                autoComplete="none"
                        />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
                <a href="/register"> Not subscribde yet ? Create an account </a>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return { errorMessage: state.authentication.errorMessage };
}

// Grace à mapStateToProps nous avons abonné notre app au store
// Ceci va de paire avec le Provider
export default compose(
    connect(mapStateToProps, actions),
    reduxForm({form: 'login'})
)(LoginForm);