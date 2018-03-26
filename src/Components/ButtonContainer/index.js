import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';
import PropTypes from 'prop-types';

export const ButtonContainer = ({getCards, favorites}) => {

  return (
    <div className="button-container">
      <NavLink to='/home/people/' 
        className='button people-button' 
        onClick={() => getCards('people')}>People</NavLink>
      <NavLink to='/home/planets/' 
        className='button planets-button' 
        onClick={() => getCards('planets')}>Planets</NavLink>
      <NavLink to='/home/vehicles/' 
        className='button vehicles-button' 
        onClick={() => getCards('vehicles')}>Vehicles</NavLink>
      <NavLink to='/favorites/' 
        className='button favorites'>
        Favorites: {favorites.length}
      </NavLink>
    </div>
  );
};

ButtonContainer.propTypes = {
  getCards: PropTypes.func,
  favorites: PropTypes.array
};
