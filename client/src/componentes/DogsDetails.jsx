import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getDogDetails } from "../actions";
import {Link} from 'react-router-dom'

export default function DogsDetails({id}){
    const dogDetail = useSelector(state => state.dogDetails)

    const dispatch = useDispatch()  

    useEffect(() => {
     dispatch(getDogDetails(id))
    },[dispatch])  

    
    return(
        <div>
        <h3>{dogDetail.name}</h3>
        <img src={dogDetail.image} alt="Image not found"/>
        <h1>Temperaments: {dogDetail.temperament}</h1>
        <h1>Weight: {dogDetail.weight}</h1>
        <h1>Height: {dogDetail.height}</h1>
        <h1>Life Span: {dogDetail.life_span}</h1>
        <br />
        <Link to ='/dogs'>Back Home</Link>
        </div>
    )

}