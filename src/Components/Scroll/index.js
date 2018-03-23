import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

export const Scroll = ({opening}) => {

  return (
    <div className='welcome'>
      <div className='scroll'>
        <div className='scroll-text'>
          <p>{opening.text}</p>
          <h3>{opening.title}</h3>
          <h3>{opening.releaseYear}</h3>
        </div>
      </div>
      <Link to={'/home'} className='enter-site'>Enter Site for Star Wars Data</Link>
    </div>
  );
};