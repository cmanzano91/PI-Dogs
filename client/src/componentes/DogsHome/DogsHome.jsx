import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs, getTemperaments, filterTemperament, filterDog, sortByWeight, sortByName} from '../../actions';
import { Link } from 'react-router-dom';
import DogCard from '../DogCard/DogCard.jsx';
import Pagination from '../Pagination/Pagination.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';
import styles from './DogsHome.module.css';


export default function DogsHome(){

const dispatch = useDispatch();
const dogs = useSelector(state => state.dogs);
const temperaments = useSelector(state => state.temperaments);

const [order, setOrder] = useState('');
const [orderW, setOrderW] = useState('');

useEffect(() => {
    dispatch(getDogs());
},[dispatch]); // queda vacio para que se monte ya que no depende de nada

useEffect(() => {
    dispatch(getTemperaments());
},[dispatch]); // queda vacio para que se monte ya que no depende de nada


// ---------- PAGINATION ------------------
const [currentPage, setCurrentPage] = useState(1); // seteo mi primera pagina
const [dogsPage,setDogsPage] = useState(8); // cuantos perros por pagina
const lastDogPos =(currentPage * dogsPage); // 8 
const firsDogPos =(lastDogPos - dogsPage);// 0
const currentDogs = dogs.slice(firsDogPos,lastDogPos);

const pagination = (page) =>{
    setCurrentPage(page);
};

// --------- HANDLER FILTERS BY DOGS AND TEMPERAMENTS-----------
function handleFilterByDogs(e){
    e.preventDefault();
    dispatch(filterDog(e.target.value));

};

function handleTemperaments(e){
    e.preventDefault();
    dispatch(filterTemperament(e.target.value));

};

 // --------- HANDLER SORTS BY WEIGHT AND NAME ----------- 
function handleSortByWeight(e){
    e.preventDefault();
    dispatch(sortByWeight(e.target.value));
    setCurrentPage(1);
    setOrderW(`${e.target.value}`);
}

function handleSortByName(e){
    e.preventDefault();
    dispatch(sortByName(e.target.value));
    setCurrentPage(1);
    setOrder(`${e.target.value}`);

}

// --------- RELOAD DOGS ----------- 

function handleDogs(e){
    e.preventDefault()
    dispatch(getDogs())
}


return (
    <div className={styles.bkg}>
        <div className={styles.container}>   
        <nav className={styles.navBar}>
        <div className={styles.searchBar}>
            <SearchBar/>
        </div>
        <div className={styles.createButton}>
        <Link to= '/newDog'>
            <button>Create new dog</button>
        </Link>
        </div>
        </nav>
        <h1>THE DOG WORLD</h1>
        <div>
            <button onClick={e => {handleDogs(e)}}>
                Reload dogs 
            </button>
        </div>
        <div className={styles.filters}>   
            <select onChange={(e)=> handleSortByName(e)}> 
                <option value="allN" key="name">Sort by Name</option>          
                <option value="ascN" key="asc">Ascendente</option>
                <option value="desN" key="des">Descendente</option>
            </select>
            <select onChange={(e)=> handleSortByWeight(e)}>
                <option value="allW" key="allW">Sort by Weight</option>
                <option value="ascW" key="ascW">Ascendente Weight</option>
                <option value="desW" key="desW">Descendente Weight</option>
            </select>
            <select onChange={(e)=> handleFilterByDogs(e)}>
                <option value='all' key="all">Filter by Breeds</option>    
                <option value='number' key="number">Breeds of api</option>
                <option value ='notnumber' key="notnumber">Breed created by as</option>
            </select>
            <select onChange ={e => handleTemperaments(e)}>
                <option value='allT' key="allT">Filter by Temperaments</option>
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
            <ul className={styles.cards}>
            {
             currentDogs && currentDogs.map(d => { return (
                <div key={d.id}>
                <Link to= {'/dogs/'+d.id} className={styles.linkCard}>
                <DogCard name={d.name} image={d.image} weight={d.weight} temperament ={d.temperament} />
                </Link>
                </div>
                )})   
            }
            </ul>
        </div>
        </div>
    </div>


);
};





