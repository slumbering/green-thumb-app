import { CREATE_PLANT, CREATE_PLANT_ERROR, FETCH_ALL, FETCH_ALL_ERROR } from '../constants/plant.constants';

const INITIAL_STATE = {
    payload: '',
    errorMessage: ''
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case CREATE_PLANT:
        console.log('REDUCER CREATE_PLANT', state);
            return { ...state, payload: [...state.payload, action.payload] }
        case CREATE_PLANT_ERROR:
            return { ...state, errorMessage: action.errorMessage }
        case FETCH_ALL:

        console.log('REDUCER FETCH_ALL', state);
            return { ...state, payload: action.payload }
        case FETCH_ALL_ERROR:
            return { ...state, errorMessage: action.errorMessage }
        default:
            return state;
    }
}