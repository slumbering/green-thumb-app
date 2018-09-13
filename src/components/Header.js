import React, { Component } from 'react';
import logo from './thumbs-up.png';
import { connect } from 'react-redux';
import * as actions from '../actions'
import { resolve } from 'path';
import { rejects } from 'assert';

class Header extends Component {

    isUserConnected = () => {
        var currentUser = localStorage.getItem('user-token');
        if(currentUser) {
            return true;
        }
    }

    signOut = () => {
        return localStorage.removeItem('user-token');
        //Need to redirect to Home
    }

    render() {
        return (
            <header className="App-header">
            { isUserConnected &&
                <button onSubmit={this.SignOut}>Sign out</button>
            }
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to Green Teub</h1>
            </header>
        )
    }
}

function mapStateToProps(state) {
    const authentication = state.authentication;
    
    return ( authentication )
}

export default connect(mapStateToProps, actions)(Header);