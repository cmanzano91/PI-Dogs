import React from 'react';

export default function DogCard({name,image,temperament,weight}){
    return(
        <div>
            <h3>{name}</h3>
            <img src={image} alt="Image not found"/>
            <h1>Temperaments: {temperament}</h1>
            <h1>Weight: {weight}</h1>
        </div>
    )
}