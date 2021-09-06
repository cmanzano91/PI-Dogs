
const initialState = {
    dogs:[],
    allDogs: [],
    temperaments:[],
    dogsDetails: [],
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case 'GET_DOGS':
            return {    
                ...state,
                dogs: action.payload,
                allDogs: action.payload
            }
        case 'GET_TEMPERAMENTS':
            return {
                ...state,
                temperaments: action.payload
            }
            case 'GET_DOGS_DETAIL':
                return {
                    ...state,
                    dogsDetails: action.payload
                }
        case 'GET_DOGS_NAME':
            return {
                ...state,
                dogs: action.payload
            }        

        case 'FILTER_DOG':
            const dogs = state.allDogs
            let filterDog;
            if(action.payload === 'all'){
                filterDog = dogs
            }
            else{
            if(action.payload === 'number'){
                filterDog = dogs.filter(d => !isNaN(d.id))
            } 
            else{
                filterDog = dogs.filter(d => isNaN(d.id))
            }
            }
            return {
                ...state,
                dogs: filterDog,
            }  
        
        case 'FILTER_TEMPERAMENT':
            const dogs3 = state.allDogs
            let dogsTemp;
            if(action.payload === 'allT'){
                dogsTemp = dogs3
            }
            else{
               dogsTemp = dogs3.filter(d => 
                d.temperament && d.temperament.length && d.temperament.includes(action.payload)
            )  
            }        
            return{
                ...state,
                dogs: dogsTemp
            }

        case 'FILTER_WEIGHT':
           const dogs4 = state.allDogs
            let dogsWeight;
            if(action.payload === 'allW'){
                dogsWeight = dogs4
            }
            if(action.payload === 'asc'){
                dogsWeight = dogs4.sort(function(a,b){
                    if(parseInt(a.weight.split('-')[1]) > parseInt(b.weight.split('-')[1])){
                        return -1
                    }
                    if(parseInt(a.weight.split('-')[1])< parseInt(b.weight.split('-')[1])){
                        return 1
                    }
                        return 0
                })
            }
            if(action.payload === 'des'){
                dogsWeight = dogs4.sort(function(a,b){
                    if(parseInt(a.weight.split('-')[0]) > parseInt(b.weight.split('-')[0])){
                        return 1
                    }
                    if(parseInt(a.weight.split('-')[0]) < parseInt(b.weight.split('-')[0])){
                        return -1
                    }
                        return 0
                })
                                      
            }

            return {
                ...state,
                dogs: dogsWeight,
            }       
            
        case 'SORT_BY':
            const dogs5 = state.allDogs
            let sortDog;
            if(action.payload === 'asc'){
                sortDog = dogs5.sort(function(a,b){
                    if(a.name > b.name){
                        return 1
                    }
                    if(a.name < b.name){
                        return -1
                    }
                        return 0
                })
            }
            if(action.payload === 'des'){
                sortDog = dogs5.sort(function(a,b){
                    if(a.name > b.name){
                        return -1
                    }
                    if(a.name < b.name){
                        return 1
                    }
                        return 0
                })
                                      
            }
            return {
                ...state,
                dogs: sortDog,
            }

        default :
            return state;    
    }
    
}

export default rootReducer