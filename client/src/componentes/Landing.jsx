import React from 'react'
import {Link} from 'react-router-dom'

function Landing() {
    return (
        <div>
        <h1>Bienvenidos!</h1>
        <Link to ='/dogs'>
            <button>Ingresar</button>
        </Link>
        </div>
    )
}

export default Landing