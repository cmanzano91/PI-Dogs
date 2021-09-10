import React from 'react';
import styles from  './DogCard.module.css'

export default function DogCard({name,image,temperament,weight}){
    if(!temperament){
        temperament = "None"
    }
    return(
        <li className={styles.format}>
            <h3 className={styles.name}>{name}</h3>
            <img className={styles.image} src={image} alt="Image not found"/>
            <h5>Temperaments: </h5>
            <span>{temperament}</span>
            <h5>Weight: </h5>
            <span>{weight} kg</span>
        </li>
    )
}; 


