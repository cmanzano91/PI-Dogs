import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Landing.module.css'

function Landing() {
    return (
        <div className={styles.bgImg}>
        <h1>Welcome!</h1>
        <br />
        <Link to ='/dogs'>
            <button>Hop in</button>
        </Link>
        </div>
    )
};

export default Landing;