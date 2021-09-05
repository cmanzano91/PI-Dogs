import React from 'react';

export default function DogCard({name,image,temperament,weight}){
    return(
        <div>
            <h3>{name}</h3>
            <img src={image} alt="Image not found"/>
            <h1>Temperamentos: {temperament}</h1>
            <h1>Peso: {weight}</h1>
        </div>
    )
}