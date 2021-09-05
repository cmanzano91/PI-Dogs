
const initialState = {
    dogs:[],
    temperaments: []
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case 'GET_DOGS':
            return {    
                ...state,
                dogs: action.payload,
            }
        case 'GET_TEMPERAMENTS':
            return {
                ...state,
                temperaments: action.payload
            }
        case 'FILTER_DOG':
            const dogs = state.dogs
            const filterDog = dogs.filter(d => d.id === action.payload)
            return {
                ...state,
                dogs: filterDog,
            }    
        default :
            return state;    
    }
    
}

export default rootReducer