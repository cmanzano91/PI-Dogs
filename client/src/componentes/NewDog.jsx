import axios from 'axios';
import React from 'react';
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTemperaments, postDog } from '../actions';



export default function NewDog(){
    const [newDog, setNewDog] = React.useState({name:'',  minheight:'', maxheight:'', minweight:'', maxweight:'', minlife_span:'', maxlife_span:'', temperament:[]})
    const dispatch = useDispatch()
    const temperaments = useSelector(state => state.temperaments)

    useEffect(() => {
        dispatch(getTemperaments())
    },[dispatch]) 


    function handleChange(e){
        setNewDog({
          ...newDog,
          [e.target.name]: e.target.value
          
        })
      }
      
      function handleSelect(e){ 
          setNewDog({
              ...newDog,
              temperament: [...newDog.temperament,e.target.value]
          })
    

      }

      function handleSubmit(e){
          e.preventDefault()
          dispatch(postDog(newDog))
          setNewDog({name:'',  minheight:'', maxheight:'', minweight:'', maxweight:'', minlife_span:'', maxlife_span:'', temperament:[]})
          

      }
 

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <h3>Creat new Dog</h3>
            <label>Name/Breed</label>
            <input type="text" name ="name" value ={newDog.name} onChange={handleChange} required/>
            <br />
            <label>Min. height</label>
            <input type="number" name ="minheight" value ={newDog.minheight} onChange={handleChange} required/>
            <label>Max. height</label>
            <input type="number" name ="maxheight" value ={newDog.maxheight} onChange={handleChange} required/>
            <br />
            <label>Min. weight</label>
            <input type="number" name ="minweight" value ={newDog.minweight} onChange={handleChange} required/>
            <label>Max. height</label>
            <input type="number" name ="maxweight" value ={newDog.maxweight} onChange={handleChange} required/>
            <br />
            <label>Min. life span</label>
            <input type="number" name ="minlife_span" value ={newDog.minlife_span} onChange={handleChange}/>
            <label>Max. life span</label>
            <input type="number" name ="maxlife_span" value ={newDog.maxlife_span} onChange={handleChange}/>
            <br />
            <select onChange ={e => handleSelect(e)}>
            <option value='allT' key="allT">Temperaments</option>
            { temperaments && temperaments.map(d =>    
            <option key={d} value={d}>{d}</option>
            )}
            </select>
            {
            <ul><li>{newDog.temperament.map(t => t + ', ')}</li></ul>
            }
            <br /><br />
            <button type='submit'>Submit</button>
            <br /><br />
            <Link to ='/dogs'>Back Home</Link>
        </form>
        </div>
    )   
    
}   