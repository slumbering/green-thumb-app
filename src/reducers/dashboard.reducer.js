import { plantConstants } from '../constants';

export function itemsReducer(state = {}, action) {
    switch(action.type) {
        case plantConstants.ADD_ITEM:
            console.log('ADD_ITEM');
            console.log(state);
            console.log(action);
            return [...state, action.plant]; //newState
        case plantConstants.ADD_SUCCESS:
            console.log('ADD_SUCCESS');
            console.log(state);
            console.log(action);            
            return [...state, action.plant]; //newState
        case plantConstants.ADD_FAILURE:
            console.log('ADD_FAILURE');
            return {};
        case plantConstants.EDIT_ITEM:
            const itemID = action.payload.id;
            return state.map(item => {
                if(item.id !== itemID) {
                    return item;plantConstants
                }

                return action.payload;
            })

            default:
                return state;
    }
}