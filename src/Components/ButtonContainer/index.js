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
      <NavLink to='/people/' className='button' onClick={() => 
        getCards('people')}>People</NavLink>
      <NavLink to='/planets/' className='button' onClick={() => 
        getCards('planets')}>Planets</NavLink>
      <NavLink to='/vehicles/' className='button' onClick={() => 
        getCards('vehicles')}>Vehicles</NavLink>
    </div>
  );
};

      // <Button text='People' getCards={getCards}/>
      // <Button text='Planets' getCards={getCards}/>
      // <Button text='Vehicles' getCards={getCards}/>



    //       <div className='button-container'>
    //   <NavLink to='/people' className='button' text='People'>People</NavLink>
    //   <NavLink to='/planets' className='button' text='People'>Planets</NavLink>
    //   <NavLink to='/vehicles' className='button' text='People'>Vehicles</NavLink>


    // </div>