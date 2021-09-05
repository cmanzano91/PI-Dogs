import axios from 'axios';
import React from 'react';
import {Link} from 'react-router-dom'


export default function NewDog(){
    const [newDog, setNewDog] = React.useState({name:'',  minheight:'', maxheight:'', minweight:'', maxweight:'', minlife_span:'', maxlife_span:'', temperament:[]})

    function handleChange(e){
        setNewDog({
          ...newDog,
          [e.target.name]: e.target.value
        })
      }

      function handleSubmit(e){
          e.preventDefault()
          axios.post('http://localhost:3001/dogs',newDog)
          .then(r => console.log('New dog succesfully created '+ r))
          .catch(e => console.log("error at creating new dog " +e))
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
            <label>Select Temperaments</label>
            {
            <input type="checkbox" name ="temperament" value ={newDog.temperament} onChange={handleChange}/>
            }
            <button type='submit'>Submit</button>
            <br /><br />
            <Link to ='/dogs'>Back Home</Link>
        </form>
        </div>
    )
    
}   