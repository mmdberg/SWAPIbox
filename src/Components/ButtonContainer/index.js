import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import './styles.css'

export const ButtonContainer = ({getCards}) => {
  // const categories = ['people', 'planets', 'vehicles']
  // const NavLinks = categories.map((category, index) => {
  //   return <NavLink to={category} key={index} onClick={() => 
  //     getCards(category)}>{category.toUpperCase()}</NavLink>
  //  })
  return (
    <div className="button-container">
      <NavLink to='/home/people/' className='button' onClick={() => 
        getCards('people')}>People</NavLink>
      <NavLink to='/home/planets/' className='button' onClick={() => 
        getCards('planets')}>Planets</NavLink>
      <NavLink to='/home/vehicles/' className='button' onClick={() => 
        getCards('vehicles')}>Vehicles</NavLink>
    </div>
  );
};
