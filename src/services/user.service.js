// The user service encapsulates all backend api calls for performing CRUD operations on user data, 
// as well as logging and out of the example application. The service methods are exported via the userService 
// object at the top of the file, and the implementation of each method is located in the function declarations below.

import { authHeader } from '../helpers';
import axios from 'axios';

export const userService = {
    login,
    logout,
    register
};

function login(username, password) {

    return axios.post('http://localhost:3000/login', {
        login: username,
        password: password
    })
    .then(function (response) {

        if(response.data.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user-token', JSON.stringify(response.data.token));
        }
        return response.data;
    })
    .catch(function (error) {
        console.log(error);

        return Promise.reject(error.response.data.message);
    });
}

function logout() {
    // remove user from local storage to log out user
    localStorage.removeItem('user');
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch('/users/register', requestOptions)
        .then(handleResponse);
}

function handleResponse(response) {
    if(!response.ok) {
        return Promise.reject(response.statusText);
    }

    return response.json();
}