import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Details.module.css';

const StarshipPage = (props) => {
  
  const starship = props.getStarship(props.match.params.idx);
  
  return (
    <div className={styles.page}>
      {starship ?
        <div className={styles.details}>
          <span>NAME:</span>
          <span>{starship.name}</span>
          <span>MODEL:</span>
          <span>{starship.model}</span>
          <Link to='/'>RETURN</Link>
        </div>
        :
        <h3>Loading...</h3>
      }
    </div>
  );
};

export default StarshipPage;
