// Contains Redux action creators for actions related to users.

// Most of the actions for users are async actions that are made up of multiple sub actions, this is because they have to make an http request and wait for the response before completing. Async actions typically dispatch a request action before performing an async task (e.g. an http request), and then dispatch a success or error action based on the result of the async task.

import { SIGNUP_USER, SIGNUP_ERROR, LOGIN_USER, LOGIN_ERROR } from '../constants/user.constants';
import axios from 'axios';

export const logout = () => {
    localStorage.removeItem('user-token');
}

// ACTION CREATOR
export const signup = (formProps, callback) => async dispatch => {
    try {
        const response = await axios.post('http://localhost:3000/register', formProps);
        
        dispatch({type: SIGNUP_USER, payload: response.data.token});

        callback();
    } catch(e) {
        dispatch({type: SIGNUP_ERROR, payload: 'Email is in use'});
    }
};

export const login = (formProps, callback) => async dispatch => {
    console.log(formProps);

    try {
        const response = await axios.post('http://localhost:3000/login', {
            login: formProps.login,
            password: formProps.password
        });

        dispatch({ type:LOGIN_USER, payload:response.data.user})

        localStorage.setItem('user-token', JSON.stringify(response.data.token));

        callback();
    } catch(e) {
        dispatch({type: LOGIN_ERROR, payload: 'Wrong login or password'});
    }
};