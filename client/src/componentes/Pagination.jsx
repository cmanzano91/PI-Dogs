import React from 'react'


export default function Pagination({dogs,dogsPage,pagination}){
    const pageNumber = []

    for(let i =0; i<= Math.ceil(dogs/dogsPage);i++){
        pageNumber.push(i+1)
    }

    return(
        <nav>
            {
            pageNumber && pageNumber.map(p => (
                // <li key={p}>
                    <a key={p} onClick={()=> pagination(p)}>{p}</a>
                // </li>
        ))}
        </nav>
    )

}