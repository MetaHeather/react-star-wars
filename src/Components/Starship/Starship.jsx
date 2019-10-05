import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Starship.module.css';

const Starship = (props) => {
    return(
        <div className={styles.starships}>
        {
            props.starships.map((starship, idx) => {
                return(
                    <Link
                        className={styles.cards}
                        to={`/starships/${idx}`}
                        key={starship.name}
                    >
                        {starship.name}
                    </Link>
                )
            })
        }
        </div>
    )
}

export default Starship; 

