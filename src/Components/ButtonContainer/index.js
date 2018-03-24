import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';
import PropTypes from 'prop-types';

export const ButtonContainer = ({getCards}) => {

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
    </div>
  );
};

ButtonContainer.propTypes = {
  getCards: PropTypes.func
}
