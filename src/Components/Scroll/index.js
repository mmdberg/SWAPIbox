import React from 'react';
import './styles.css';

export const Scroll = ({opening}) => {

  return (
    <div className='scroll'>
      <div className='scroll-text'>
        <p>{opening.text}</p>
        <h3>{opening.title}</h3>
        <h3>{opening.releaseYear}</h3>
      </div>
    </div>
  );
};