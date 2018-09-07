import { CREATE_PLANT, FETCH_ALL } from '../constants/plant.constants';

export function itemsReducer(state = {}, action) {
    switch(action.type) {
        case CREATE_PLANT:
            console.log('CREATE_PLANT');
            console.log(action);
            return [...state, action.payload.data]; //newState
        // case plantConstants.ADD_SUCCESS:
        //     console.log('ADD_SUCCESS');           
        //     return [...state, action.plant]; //newState
        // case plantConstants.ADD_FAILURE:
        //     return {};
        case FETCH_ALL:
            const plants = action.payload.data;
            return [...state, ...plants];
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

            default:
                return state;
    }
}