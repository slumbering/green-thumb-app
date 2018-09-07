// Contains Redux action creators for actions related to users.

// Most of the actions for users are async actions that are made up of multiple sub actions, this is because they have to make an http request and wait for the response before completing. Async actions typically dispatch a request action before performing an async task (e.g. an http request), and then dispatch a success or error action based on the result of the async task.

import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from '.';
import { history } from '../helpers';

// Public action creators are exposed via the userActions object
export const userActions = {
    login,
    logout,
    register,
    getAll,
    delete: _delete
};

// function implementations are located below
function login(username, password) {

    return dispatch => {

        dispatch(request({username, password})); // dispatches a LOGIN_REQUEST action with dispatch(request({ username }));

        userService.login(username, password) // calls the async task userService.login(username, password)
            .then(
                user => {
                    dispatch(success(user)); // dispatches a LOGIN_SUCCESS with dispatch(success(user)) if login was successful;
                    history.push('/dashboard');
                },
                error => {
                    dispatch(failure(error)); // dispatches a LOGIN_FAILURE action with dispatch(failure(error)); if login failed
                    dispatch(alertActions.error(error));
                }
            );
    };
    // This is 3 nested action creator functions for request(), success() and failure() that return the actions LOGIN_REQUEST, LOGIN_SUCCESS and LOGIN_FAILURE respectively. Putting the sub action creators into nested functions also allows us to give them standard names like request, success and failure without clashing with other function names because they only exist within the scope of the parent function.
    function request(user) { return { type: userConstants.LOGIN_REQUEST, user}}
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user}}
    function failure(user) { return { type: userConstants.LOGIN_FAILURE, user}}
}

function logout() {
    userService.logout;
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => {
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            )
    }

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user}};
    function success(user) { return {type: userConstants.REGISTER_SUCCESS, user}};
    function failure(error) { return {type: userConstants.REGISTER_FAILURE, error}};
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => {
                    dispatch(success(users));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error))
                }
            )
    }

    function request() { return { type: userConstants.GETALL_REQUEST}};
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users}};
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error}};
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        userService._delete(id)
            .then(
                id => {
                    user => {
                        dispatch(success(id))
                    },
                    error => {
                        dispatch(failure(error));
                        dispatch(alertActions.error(error));
                    }
                }
            )

    }

    function request(id) { return {type: userConstants.DELETE_REQUEST, id}}
    function success(id) { return {type: userConstants.DELETE_SUCCESS, id}}
    function failure(id, error) { return {type: userConstants.DELETE_FAILURE, id, error}}
}