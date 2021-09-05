import axios from 'axios'
import DogsDetails from '../componentes/DogsDetails';
// const back = 'http://localhost:3001/dogs'

export function getDogs(){
    return async function(dispatch){
        var dogs = await axios.get("http://localhost:3001/dogs",{});
        return dispatch ({
            type: 'GET_DOGS',
            payload: dogs.data
        })
    }
}

export function getTemperaments(){
    return async function(dispatch){
        var temperaments = await axios.get("http://localhost:3001/temperaments",{});
        return dispatch ({
            type: 'GET_TEMPERAMENTS',
            payload: temperaments.data
        })
    }
}

export function getDogsDetail(id){
    return async function(dispatch){
        var dogsDetail = await axios.get(`http://localhost:3001/dogs/${id}`,{});
        return dispatch ({
            type: 'GET_DOGS_DETAIL',
            payload: dogsDetail.data
        })
     }
 
}

export function filterDog(payload){
    return {
        type: 'FILTER_DOG',
        payload
    }
}

