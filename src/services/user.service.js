// The user service encapsulates all backend api calls for performing CRUD operations on user data, as well as logging and out of the example application. The service methods are exported via the userService object at the top of the file, and the implementation of each method is located in the function declarations below.

import { authHeader } from '../helpers';
import axios from 'axios';

export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete
};

function login(username, password) {

    return axios.post('http://localhost:3000/login', {
            login: username,
            password: password
        })
        .then(function (response) {
            console.log(response);

            if(response.data.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user-token', JSON.stringify(response.data.token));
            }
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
    

    // const requestOptions = {
    //     method: 'POST',
    //     headers : {'Content-Type': 'application/json'},
    //     body: {username, password}
    // };

    // return fetch('http://localhost:3000/login', requestOptions)
    //     .then(response => {
    //         if(!response.ok) {
    //             alert('rejected');
    //             return Promise.reject(response.statusText);
    //         }

    //         return response.json()
    //     })
    //     .then(user => {
    //         // login successful if there's a jwt (JSON Web Token) token in the response
    //         if(user && user.token) {
    //             // store user details and jwt token in local storage to keep user logged in between page refreshes
    //             localStorage.setItem('user', JSON.stringify(user));
    //         }

    //         return user;
    //     });
}

function logout() {
    // remove user from local storage to log out user
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch('/users/', requestOptions)
        .then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch('/users/' + id, requestOptions)
        .then(handleResponse);
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

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: {...authHeader(), 'Content-type': 'application/json'},
        body: JSON.stringify(user)
    };

    return fetch('/users/' + user.id, requestOptions)
        .then(handleResponse)
}

// Prefix this function with underscore cause "delete" is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch('/users/' + id, authHeader).then(handleResponse);
}

function handleResponse(response) {
    if(!response.ok) {
        return Promise.reject(response.statusText);
    }

    return response.json();
}