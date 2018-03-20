import React from 'react';
import './styles.css'

export const Card = (props) => {
  if (props.information.homeworld) {
    return (
      <div className='card'>
        <h3>{props.information.name}</h3>
        <p>{props.information.species}</p>
        <p>{props.information.homeworld}</p>
        <p>{props.information.homeworldPop}</p>
      </div>
      )
    }
}