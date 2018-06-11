// Contains Redux action creators for actions related to alerts / toaster notifications in the application. 
// For example to display a success alert message with the text 'Registration Successful' you can call dispatch(alertActions.success('Registration successful'));.

// I've wrapped the action methods in an alertActions object at the top of the file so it's easy to see all available actions at a glance and simplifies importing them into other files. 
// The implementation details for each action creator are placed in the below functions.

import { alertConstants } from '../constants';

export const alertActions = {
    success,
    error,
    clear
}

function success(message) {
    return { type: alertConstants.SUCCESS, message };
}

function error(message) {
    return {type: alertConstants.ERROR, message };
}

function clear(message) {
    return {type: alertConstants.CLEAR, message };
}