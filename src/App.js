import React, { Component } from 'react';
import { Router, Route, Link, Switch } from 'react-router-dom';

import { history } from './helpers';
import { PrivateRoute } from './components/PrivateRoute';
import './App.css';
import Login from './components/Auth/Login';
import SignupForm from './components/Auth/SignupForm';
import Dashboard from './components/Dashboard/Dashboard';
import PageNotFound from './components/PageNotFound';
import Header from './components/Header';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';
import { Button, Menu } from 'semantic-ui-react'

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  config.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user-token'))}`;
  return config;
}, function (error) {
  console.log("Axios Error =====>", error);
  // Do something with request error
  return Promise.reject(error);
});


class App extends Component {

  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Header />
          <main>
            <Switch>
              {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/" component={Login} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignupForm} />
              <Route component={PageNotFound} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
