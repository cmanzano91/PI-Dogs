import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDogDetails } from "../../actions";
import {Link} from 'react-router-dom';
import styles from  './DogsDetails.module.css'
import {IoHome} from 'react-icons/io5'

export default function DogsDetails({id}){
    const dispatch = useDispatch();  

    useEffect(() => {
     dispatch(getDogDetails(id));
    },[dispatch]); 

    const dogDetail = useSelector(state => state.dogDetails); 

    return(
        <div>
        <div className={styles.backHome}>
        <Link to ='/dogs'>
        <button><IoHome/></button>
        </Link>
        </div>
        <div>
        <h3>{dogDetail.name}</h3>
        <img className={styles.image} src={dogDetail.image} alt="Image not found"/>
        <h5>Temperaments:</h5>
        <ul>{dogDetail.temperament}</ul>
        <h5>Weight: </h5>
        <p>{dogDetail.weight} kg</p>
        <h5>Height: </h5>
        <p>{dogDetail.height} mts</p>
        <h5>Life Span: </h5>
        <p>{dogDetail.life_span}</p>
        <br />
        </div> 
        </div>
    )

};

        // style = {{
        //     backgroundImage : `url(${dogDetail.image})`,
        //     width: '100vw',
        //     height: '200vh',
        //     backgroundRepeat: 'no-repeat',
        //     position: 'absolute',
        // }}