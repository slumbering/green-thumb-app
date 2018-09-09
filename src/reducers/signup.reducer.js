import { SIGNUP_USER, SIGNUP_ERROR } from '../constants/user.constants';

const INITIAL_STATE = {
    authenticated: '',
    errorMessage: ''
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SIGNUP_USER:
            return { ...state, authenticated: action.payload }
        case SIGNUP_ERROR:
            return { ...state, errorMessage: action.payload }
        default:
            return state;
    }
}