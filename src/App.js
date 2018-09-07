import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';

import { history } from './helpers';
import { PrivateRoute } from './components/PrivateRoute';
import './App.css';
import Login from './components/Login';
import Subscription from './components/Subscription';
import Dashboard from './components/Dashboard';
import 'semantic-ui-css/semantic.min.css';
import logo from './thumbs-up.png';
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
          <header className="App-header">
            <Menu compact floated size='mini'>
              <Menu.Item>
                <Button color='green'>
                  <Link to='/signup'> sign up</Link>
                </Button>
              </Menu.Item>
            </Menu>
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Green Teub</h1>
          </header>
          <main>
            <PrivateRoute exact path="/" component={Dashboard} />
            <Route path="/login" component={() => { return localStorage.getItem('user-token') ? <Dashboard /> : <Login /> }} />
            <Route path="/signup" component={Subscription} />
            <Route path="/dashboard" component={Dashboard} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
