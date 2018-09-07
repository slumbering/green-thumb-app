import React, { Component } from 'react';
import { Button, Container, Form, Header  } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { userActions } from '../actions';

class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            login: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event, data) => {
        if(data.name === "login") {
            this.setState({
                login: event.target.value
            })
        }
        if(data.name === "password") {
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

        this.props.dispatch(
            userActions.login(
                user.login, 
                user.password
            )
        );

    }

    render() {
        const { alert } = this.props
        return (
            <Container>
                <Header as='h1'>Login</Header>
                {alert.message &&
                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                }
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
    const { alert, authentication } = state;
    
    return {
        alert,
        authentication
    };
}

// Grace à mapStateToProps nous avons abonné notre app au store
// Ceci va de paire avec le Provider
export default connect(mapStateToProps)(LoginForm);