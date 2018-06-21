import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from './helpers';
import { alertActions } from './actions';
import { PrivateRoute } from './components';
import './App.css';
import LoginForm from './Login/LoginForm';
import Subscription from './Subscription/Subscription';
import Dashboard from './Dashboard/Dashboard';
import 'semantic-ui-css/semantic.min.css';
import logo from './logo.svg';

class App extends Component {

  constructor(props) {
            super(props);
            const { dispatch } = this.props;
    //         history.listen((location, action) => {
    //             // clear alert on location change
    //             dispatch(alertActions.clear());
    //         });
        }

  render() {
    const { alert } = this.props;

    return (
      <Router history={history}>
        <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to Green Teub</h1>
            </header>
            <main>
                <PrivateRoute exact path="/" component={LoginForm} />
                <Route path="/login" component={LoginForm} />
                <Route path="/register" component={Subscription} />
                <Route path="/dashboard" component={Dashboard} />
            </main>
        </div>
      </Router>
    );
  }
}

export default App;
