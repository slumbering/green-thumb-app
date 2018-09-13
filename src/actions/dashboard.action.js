import { CREATE_PLANT, CREATE_PLANT_ERROR, FETCH_ALL, FETCH_ALL_ERROR } from '../constants/plant.constants';
import axios from 'axios';

export const createPlant = (formProps) => async dispatch => {
    try {
        const response = await axios.post('http://localhost:3000/api/plant', {
            name: formProps.name,
            species: formProps.species,
            waterPeriod: formProps.waterPeriod
        })
        .then(response => {
            return axios.put('http://localhost:3000/api/user/5b31fd7d29211dcf02a4d91b', {
                plants: response.data
            })
        });

        dispatch({ type: CREATE_PLANT, payload: response.data });

    } catch (e) {
        dispatch({ type: CREATE_PLANT_ERROR, errorMessage: e });
    }
}

export const fetchPlants = () => async dispatch => {
    try {
        const response = await axios.get('http://localhost:3000/api/plant');

        dispatch({ type: FETCH_ALL, payload: response.data });
    } catch (e) {
        dispatch({ type: FETCH_ALL_ERROR, errorMessage: e });
    }
}