import React from 'react'
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getDogs, getTemperaments, filterDog} from '../actions'
import {Link} from 'react-router-dom'
import DogCard from './DogCard'
import Pagination from './Pagination'

export default function DogsHome(){

const dispatch = useDispatch()
const dogs = useSelector(state => state.dogs) // me traigo todo mis dogs del estado

const temperaments = useSelector(state => state.temperaments)
const [currentPage, setCurrentPage] = useState(1) // seteo mi primera pagina
const [dogsPage,setDogsPage] = useState(8) // cuantos perros por pagina
const lastDogPos = currentPage * dogsPage // 8 
const firsDogPos = lastDogPos - dogsPage // 0
const currentDogs = dogs.slice(firsDogPos,lastDogPos)

const pagination = (number) =>{
    setCurrentPage(number)
}


useEffect(() => {
    dispatch(getDogs())
},[dispatch]) // queda vacio para que se monte ya que no depende de nada

useEffect(() => {
    dispatch(getTemperaments())
},[dispatch]) // queda vacio para que se monte ya que no depende de nada


function handleDogs(e){
    e.preventDefault()
    dispatch(getDogs())
}

function handleFilterByDogs(e){
    e.preventDefault()
    dispatch(filterDog(e.target.value))

}

return (
    <div>
        <Link to= '/newDog'>Create new dog</Link>
        <h1>BIENVENIDO AL MUNDO PERRO</h1>
        <button onClick={e => {handleDogs(e)}}>
            Reload dogs breed
        </button>

        <div>   
            <select name="orderAl" id="">
                <option value="asc">Ascendente</option>
                <option value="des">Descendente</option>
            </select>
            <select name="Weight" id="">
                <option value="weigh">Select by weight</option>
            </select>
            <select onChange={(e)=> handleFilterByDogs(e)}>
            <option>Select by dog breed</option>
                { 
                dogs && dogs.map(d =>  
                <option key={d.id} value={d.id}>{d.name}</option> 
                )}
            </select>
            <select name="" id="">
            <option>Select by temperament</option>
            {  temperaments && temperaments.map(d =>    
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