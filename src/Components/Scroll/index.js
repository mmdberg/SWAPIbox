import React from 'react';
import './styles.css';

export const Scroll = ({text}) => {

  return (
    <div className='scroll'>
      <p className='scroll-text'>
        {text}
      </p>
    </div>
  )
}