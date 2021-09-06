import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getDogsName } from '../actions'


export default function SearchBar(){
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')
    
    function handleChange(e){
        e.preventDefault()
        setSearch(e.target.value)
        console.log(search)
      }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getDogsName(search))
        setSearch('')  
    }
    
    return(
        <div>
            <input type="text" onChange={(e) => handleChange(e)}/>
            <button type='submit' onClick ={(e) => handleSubmit(e)}>Search dogs by Name</button>
        </div>

    )    
}