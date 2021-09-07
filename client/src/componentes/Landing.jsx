import React from 'react'
import {Link} from 'react-router-dom'

function Landing() {
    return (
        <div>
        <h1>Bienvenidos!</h1>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDUvHUIm5r4fHEFnPU1rGJ67IUh6dteCYJ6Q&usqp=CAU" alt="" />
        <br />
        <Link to ='/dogs'>
            <button>Ingresar</button>
        </Link>
        </div>
    )
}

export default Landing