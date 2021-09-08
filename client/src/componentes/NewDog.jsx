import React from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTemperaments, postDog } from '../actions';
import { useState } from 'react';
import styles from './NewDog.module.css'
import {IoHome} from 'react-icons/io5'



export default function NewDog(){
    const [newDog, setNewDog] = useState({name:'',  minheight:'', maxheight:'', minweight:'', maxweight:'', minlife_span:'', maxlife_span:'', temperament:[]});
    const dispatch = useDispatch();
    const temperaments = useSelector(state => state.temperaments);


    useEffect(() => {
        dispatch(getTemperaments());
    },[dispatch]);


    function handleChange(e){
        setNewDog({
          ...newDog,
          [e.target.name]: e.target.value
          
        });
      };
     
      function handleSelect(e){ 
          setNewDog({
              ...newDog,
              temperament: [...newDog.temperament,e.target.value]
          });
      };

      function handleDelete(t){
          setNewDog({
              ...newDog,
              temperament: newDog.temperament.filter(temp => temp !== t )
          })
      }

      function handleSubmit(e){
          e.preventDefault();
          dispatch(postDog(newDog));
          alert('Dog was succesfully created');
          setNewDog({name:'',  minheight:'', maxheight:'', minweight:'', maxweight:'', minlife_span:'', maxlife_span:'', temperament:[]});
        };

      
    return (
        <div>
        <br />
        <Link to ='/dogs'>
        <button><IoHome/></button> 
        </Link>
        <h3>Creat new Dog</h3>
        <form onSubmit={handleSubmit}>
            <label>Name/Breed </label>
            <input type="text" name ="name" value ={newDog.name} onChange={handleChange} required/>
            <br />
            <label>Min. height </label>
            <input type="number" name ="minheight" value ={newDog.minheight} onChange={handleChange} required/>
            <label>Max. height </label>
            <input type="number" name ="maxheight" value ={newDog.maxheight} onChange={handleChange} required/>
            <br />
            <label>Min. weight </label>
            <input type="number" name ="minweight" value ={newDog.minweight} onChange={handleChange} required/>
            <label>Max. height </label>
            <input type="number" name ="maxweight" value ={newDog.maxweight} onChange={handleChange} required/>
            <br />
            <label>Min. life span </label>
            <input type="number" name ="minlife_span" value ={newDog.minlife_span} onChange={handleChange}/>
            <label>Max. life span </label>
            <input type="number" name ="maxlife_span" value ={newDog.maxlife_span} onChange={handleChange}/>
            <br />
            <label>Choose temperaments: </label>
            <select onChange ={e => handleSelect(e)}>
            { temperaments && temperaments.map(d =>    
            <option key={d} value={d}>{d}</option>
            )}
            </select>
            <br /><br />
            <button type='submit'>Submit</button>
            <br /><br />
        </form>
            { newDog.temperament.map(t =>
                <div key={t}>
                <ul>{t}</ul>
                <button onClick={()=>handleDelete(t)}>x</button>
                </div>
                )
            }
        <br /><br />
        </div>
    );   
    
};   

