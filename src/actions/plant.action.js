// Contains Redux action creators for actions related to plants.

// Most of the actions for plants are async actions that are made up of multiple sub actions, 
// this is because they have to make an http request and wait for the response before completing. 
// Async actions typically dispatch a request action before performing an async task (e.g. an http request), 
// and then dispatch a success or error action based on the result of the async task.

import { plantConstants } from '../constants';
import { plantService } from '../services';
import { alertActions } from '.';
import { CREATE_PLANT, FETCH_ALL } from '../constants/plant.constants';
import axios from 'axios';

// Public action creators are exposed via the userActions object
// export const plantActions = {
//     create,
//     getAll
// };

// function implementations are located below
// function create(plant) {

//     return dispatch => {

//         dispatch(request(plant)); // dispatches a PLANT action with dispatch(request({ plant }));
//         plantService.addPlant(plant) // calls the async task plantService.addPlant(plant)
//             .then(
//                 plant => {
//                     dispatch(success(plant)); // dispatches a LOGIN_SUCCESS with dispatch(success(user)) if login was successful;
//                 },
//                 error => {
//                     dispatch(failure(error)); // dispatches a LOGIN_FAILURE action with dispatch(failure(error)); if login failed
//                     dispatch(alertActions.error(error));
//                 }
//             );
//     };
//     // This is 3 nested action creator functions for request(), success() and failure() that return the actions LOGIN_REQUEST, LOGIN_SUCCESS and LOGIN_FAILURE respectively. Putting the sub action creators into nested functions also allows us to give them standard names like request, success and failure without clashing with other function names because they only exist within the scope of the parent function.
//     function request(plant) { return { type: plantConstants.ADD_ITEM, plant}}
//     function success(plant) { return { type: plantConstants.ADD_SUCCESS, plant}}
//     function failure(plant) { return { type: plantConstants.ADD_FAILURE, plant}}
// }

export function createPlant(plant) {
    console.log("plant ================>", plant);

    return dispatch => {
        return axios.post('http://localhost:3000/api/plant', {
            name: plant.name,
            species: plant.species,
            waterPeriod: plant.waterPeriod
        })
        .then(function(response) {
            dispatch(
                {
                    type: CREATE_PLANT,
                    payload: response
                }
            )
        });
    }
}

export function fetchPlants() {
    return dispatch => {
        return axios.get('http://localhost:3000/api/plant')
        .then(function(response) {
            console.log('response ==> ', response);
            dispatch(
                {
                    type: FETCH_ALL,
                    payload: response
                }
            )
        });
    }
}