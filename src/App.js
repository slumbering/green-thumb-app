import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';
import Login from './Login/Login';
import Subscription from './Subscription/Subscription';
import Dashboard from './Dashboard/Dashboard';
import 'semantic-ui-css/semantic.min.css';
import logo from './logo.svg';

const loggedIn = false;

class App extends Component {

  state = () => { items: [] }

  render() {
    return (
      <Router>
        <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to Green Teub</h1>
            </header>
            <main> 
              <Route exact path="/" render={() => (
                loggedIn ? (
                  <Redirect to="/dashboard"/>
                ) : (
                  <Login/>
                )
              )}/>
              <Route path="/subscribe" component={Subscription}/>
              <Route path="/dashboard" component={Dashboard}/>
            </main>
        </div>
      </Router>
    );
  }
}

export default App;
