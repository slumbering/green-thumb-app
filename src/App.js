import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Subscription from './Components/Subscription';
import 'semantic-ui-css/semantic.min.css';
import logo from './logo.svg';


const loggedIn = false;

class App extends Component {
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
            </main>
        </div>
      </Router>
    );
  }
}

export default App;
