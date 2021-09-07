
const initialState = {
    dogs:[],
    allDogs: [],
    temperaments:[],
    dogDetails: [],
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
                    dogDetails: action.payload
                }
        case 'GET_DOGS_NAME':
            return {
                ...state,
                dogs: action.payload
            }
        case 'POST_DOG':
            return {
                ...state,
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

        case 'SORT_BY_WEIGHT':
            let dogsWeight;
            if(action.payload === 'allW'){
                dogsWeight = state.dogs
            }
            if(action.payload === 'ascW'){
                dogsWeight = state.dogs.sort(function(a,b){
                    if(!b.weight.split('-')[1] || (b.weight.split('-')[0].trim() === 'NaN')){
                        if(parseInt(a.weight.split('-')[1]) > parseInt(b.weight.split('-')[0])){
                            return -1
                        }
                        if(parseInt(a.weight.split('-')[1]) < parseInt(b.weight.split('-')[0])){
                            return 1
                        }
                            return 0
                        }
                    if(!a.weight.split('-')[1] || (b.weight.split('-')[0].trim() === 'NaN')){
                        if(parseInt(a.weight.split('-')[0]) > parseInt(b.weight.split('-')[1])){
                            return -1
                        }
                        if(parseInt(a.weight.split('-')[0]) < parseInt(b.weight.split('-')[1])){
                            return 1
                        }
                            return 0
                        }

                    if(parseInt(a.weight.split('-')[1]) > parseInt(b.weight.split('-')[1])){
                                return -1
                            }
                            if(parseInt(a.weight.split('-')[1]) < parseInt(b.weight.split('-')[1])){
                                return 1
                            }
                                return 0                   
                    })
                    console.log(dogsWeight)
            }
            if(action.payload === 'desW'){
                dogsWeight = state.dogs.sort(function(a,b){

                    if(!b.weight.split('-')[0] || (b.weight.split('-')[0].trim() === 'NaN')){
                        if(parseInt(a.weight.split('-')[0]) > parseInt(b.weight.split('-')[1])){
                            return 1
                        }
                        if(parseInt(a.weight.split('-')[0]) < parseInt(b.weight.split('-')[1])){
                            return -1
                        }
                            return 0
                        }
                    if(!a.weight.split('-')[0] || (a.weight.split('-')[0].trim() === 'NaN')){
                        if(parseInt(a.weight.split('-')[1]) > parseInt(b.weight.split('-')[0])){
                            return 1
                        }
                        if(parseInt(a.weight.split('-')[1]) < parseInt(b.weight.split('-')[0])){
                            return -1
                        }
                            return 0
                        }
                
                    if(parseInt(a.weight.split('-')[0]) > parseInt(b.weight.split('-')[0])){
                            return 1
                        }
                        if(parseInt(a.weight.split('-')[0]) < parseInt(b.weight.split('-')[0])){
                            return -1
                        }
                            return 0

                })
                  console.log(dogsWeight)                    
            }

            return {
                ...state,
                dogs: dogsWeight,
            }       
            
        case 'SORT_BY_NAME':
            let sortDog;
            if(action.payload === 'allN'){
                sortDog = state.dogs
            }
            if(action.payload === 'ascN'){
                sortDog = state.dogs.sort(function(a,b){
                    if(a.name > b.name){
                        return 1
                    }
                    if(a.name < b.name){
                        return -1
                    }
                        return 0
                })
            }
            if(action.payload === 'desN'){
                sortDog = state.dogs.sort(function(a,b){
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