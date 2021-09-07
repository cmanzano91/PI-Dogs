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

export function getDogDetails(id){
    return async function(dispatch){
        var dogDetails = await axios.get(`http://localhost:3001/dogs/${id}`,{});
        return dispatch ({
            type: 'GET_DOGS_DETAIL',
            payload: dogDetails.data
        })
     }
 
}

export function getDogsName(name){
    return async function(dispatch){
        try{
        var dogsName = await axios.get(`http://localhost:3001/dogs?name=${name}`,{});
        return dispatch ({
            type: 'GET_DOGS_NAME',
            payload: dogsName.data
        })
    }
    catch(e){
        console.log('error de base'+e)
    }
     }
 
}


export function postDog(payload){
    return async function(){
        var newDog = await axios.post('http://localhost:3001/dogs',payload);
        return newDog
    }
 
}

export function filterDog(payload){
    return {
        type: 'FILTER_DOG',
        payload
    }
}

export function filterTemperament(payload){
    return {
        type: 'FILTER_TEMPERAMENT',
        payload
    }
}
export function sortByWeight(payload){
    return {
        type: 'SORT_BY_WEIGHT',
        payload
    }
}

export function sortByName(payload){
    return {
        type: 'SORT_BY_NAME',
        payload
    }
}
