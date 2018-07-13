// The plant constants object contains the redux plants action types that can be dispatched in the react application,
// async actions that perform http requests involve a request followed by a success or error response, so each of
// these three steps is represented by a redux action

export const plantConstants = {
    ADD_ITEM: 'ADD_ITEM',
    ADD_SUCCESS: 'ADD_SUCCESS',
    ADD_FAILURE: 'ADD_FAILURE',
    EDIT_ITEM: 'EDIT_ITEM'
}