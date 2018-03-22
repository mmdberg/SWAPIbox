import React from 'react';
import './styles.css';

export const NavLink = ({text, getcards}) => {
  const lowerCase = text.toLowerCase();
  return (
    <button 
      className='button' 
      onClick={() => getcards(lowerCase)}>
      {text}
    </button>
  );
};