import { userConstants } from '../constants';

export function itemsReducer(state = {}, action) {
    switch(action.type) {
        case userConstants.ADD_ITEM:
            console.log('ADD_ITEM');
            console.log(state);
            action.payload.id = Date.now();
            const newState = [...state, action.payload];
            return newState;
        case userConstants.EDIT_ITEM:
            const itemID = action.payload.id;
            return state.map(item => {
                if(item.id !== itemID) {
                    return item;
                }

                return action.payload;
            })

            default:
                return state;
    }
}