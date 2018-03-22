import React from 'react';
import './styles.css';

export const Button = ({text, getCards}) => {
  const lowerCase = text.toLowerCase();
  return (
    <button 
      className='button' 
      onClick={() => getCards(lowerCase)}>
      {text}
    </button>
  );
};