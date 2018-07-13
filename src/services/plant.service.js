// The plant service encapsulates all backend api calls for performing CRUD operations on plant data, 
// The service methods are exported via the plantService 
// object at the top of the file, and the implementation of each method is located in the function declarations below.

import axios from 'axios';

export const plantService = {
    addPlant
};

function addPlant(plant) {

    console.log("plant ================>", plant);

    return axios.post('http://localhost:3000/api/plant', {
        name: plant.name,
        species: plant.species,
        waterPeriod: plant.waterPeriod
    })
    .then(function (response) {
        console.log('ADDPLANT RESPONSE =>', response);
        return response.data;
    })
    .catch(function (error) {
        console.log(error);

        return Promise.reject(error);
    });
}