import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDogs, getTemperaments, filterDog, filterWeight, sortBy, filterTemperament } from '../actions'
import { Link } from 'react-router-dom'
import DogCard from './DogCard'
import Pagination from './Pagination'
import SearchBar from './SearchBar'

export default function DogsHome(){

const dispatch = useDispatch()
const dogs = useSelector(state => state.dogs)
const temperaments = useSelector(state => state.temperaments)

const [order, setOrder] = useState('')

useEffect(() => {
    dispatch(getDogs())
},[dispatch]) // queda vacio para que se monte ya que no depende de nada

useEffect(() => {
    dispatch(getTemperaments())
},[dispatch]) // queda vacio para que se monte ya que no depende de nada



// ---------- PAGINATION ------------------
const [currentPage, setCurrentPage] = useState(1) // seteo mi primera pagina
const [dogsPage,setDogsPage] = useState(8) // cuantos perros por pagina
const lastDogPos = currentPage * dogsPage // 8 
const firsDogPos = lastDogPos - dogsPage // 0
const currentDogs = dogs.slice(firsDogPos,lastDogPos)

const pagination = (number) =>{
    setCurrentPage(number)
}

// --------- HANDLER FILTERS BY DOGS AND TEMPERAMENTS -----------
function handleFilterByDogs(e){
    e.preventDefault()
    dispatch(filterDog(e.target.value))

}
function handleTemperaments(e){
    e.preventDefault()
    dispatch(filterTemperament(e.target.value))

}
 // --------- HANDLER SORTS BY WEIGHT AND NAME ----------- 
function handleFilterByWeight(e){
    e.preventDefault()
    dispatch(filterWeight(e.target.value))
    setCurrentPage(1)
    setOrder(`${e.target.value}`)
}

function handleSortBy(e){
    e.preventDefault()
    dispatch(sortBy(e.target.value))
    setCurrentPage(1)
    setOrder(`${e.target.value}`)

}


return (
    <div>
        <h1>WELCOME TO THE DOG WORLD!</h1>

        <Link to= '/newDog'>Create new dog</Link>
        
        <div>
            <SearchBar/>
        </div>

        <div>   
            <select onChange={(e)=> handleSortBy(e)}>           
                <option value="asc" key="asc">Ascendente</option>
                <option value="des" key="des">Descendente</option>
            </select>
            <select onChange={(e)=> handleFilterByWeight(e)}>
                <option value="asc" key="asc">Ascendente Weight</option>
                <option value="des" key="des">Descendente Weight</option>
            </select>
            <select onChange={(e)=> handleFilterByDogs(e)}>
                <option value='all' key="all">Breeds</option>    
                <option value='number' key="number">Breeds of api</option>
                <option value ='notnumber' key="notnumber">Breed created by as</option>
            </select>
            <select onChange ={e => handleTemperaments(e)}>
                <option value='allT' key="allT">Temperaments</option>
                { temperaments && temperaments.map(d =>    
                    <option key={d} value={d}>{d}</option>
                    )}
            </select>

        </div> 
        <div>
            <Pagination
            dogsPage= {dogsPage}
            dogs = {dogs.length}
            pagination={pagination}
            />  
            {
             currentDogs && currentDogs.map(d => { return (
                <Link to= {'/dogs/'+d.id}>
                <DogCard name={d.name} image={d.image} weight={d.weight} temperament ={d.temperament} key={d.id}/>
                </Link>
                )})   
            }
        </div>
    </div>


)
}




        {/* <button onClick={e => {handleDogs(e)}}>
            Reload dogs breed
        </button> */}
// function handleDogs(e){
//     e.preventDefault()
//     dispatch(getDogs())
// }
