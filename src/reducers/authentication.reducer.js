import { LOGIN_USER, LOGIN_ERROR } from '../constants/user.constants';

const INITIAL_STATE = {
    authenticated: '',
    errorMessage: ''
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, authenticated: action.payload }
        case LOGIN_ERROR:
            return { ...state, errorMessage: action.payload }
        default:
            return state;
    }
}