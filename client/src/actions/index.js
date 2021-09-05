import axios from 'axios'
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

export function filterDog(payload){
    return {
        type: 'FILTER_DOG',
        payload
    }
}
