import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';

import { history } from './helpers';
import { PrivateRoute } from './components';
import './App.css';
import Login from './Login/Login';
import Subscription from './Subscription/Subscription';
import Dashboard from './Dashboard/Dashboard';
import 'semantic-ui-css/semantic.min.css';
import logo from './logo.svg';
import axios from 'axios';

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  console.log('Axios config =>',config);
  config.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user-token'))}`;
  return config;
}, function (error) {
  console.log("Axios Error =====>", error);
  // Do something with request error
  return Promise.reject(error);
});


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
                <PrivateRoute exact path="/" component={Dashboard} />
                <Route path="/login" component={ () => { return localStorage.getItem('user-token') ? <Dashboard/> : <Login/> } } />
                <Route path="/register" component={Subscription} />
                <Route path="/dashboard" component={Dashboard} />
            </main>
        </div>
      </Router>
    );
  }
}

export default App;
