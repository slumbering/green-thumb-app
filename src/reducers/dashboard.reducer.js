import { CREATE_PLANT, CREATE_PLANT_ERROR, FETCH_ALL, FETCH_ALL_ERROR } from '../constants/plant.constants';

// export function itemsReducer(state = {}, action) {
//     switch(action.type) {
//         case CREATE_PLANT:
//             console.log('CREATE_PLANT');
//             console.log(action);
//             return [...state, action.payload.data]; //newState
// case plantConstants.ADD_SUCCESS:
//     console.log('ADD_SUCCESS');           
//     return [...state, action.plant]; //newState
// case plantConstants.ADD_FAILURE:
//     return {};
// case FETCH_ALL:
//     const plants = action.payload.data;
//     return [...state, ...plants];
// case plantConstants.GET_ALL_SUCCESS:
//     return [...state, action.plant];
// case plantConstants.GET_ALL_FAILURE:
//     return {};
// case plantConstants.EDIT_ITEM:
//     const itemID = action.payload.id;
//     return state.map(item => {
//         if(item.id !== itemID) {
//             return item;
//         }

//         return action.payload;
//     })

//             default:
//                 return state;
//     }
// }

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