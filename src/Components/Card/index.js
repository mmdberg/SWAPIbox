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
    } else if (props.information.terrain) {
      return (
        <div className='card'>
          <h3>{props.information.name}</h3>
          <p>{props.information.terrain}</p>
          <p>{props.information.population}</p>
          <p>{props.information.climate}</p>
        </div>
      )
    } else {
      return (
        <div className='card'>
          <h3>{props.information.name}</h3>
          <p>{props.information.model}</p>
          <p>{props.information.class}</p>
          <p>{props.information.passengers}</p>
        </div>
      )
    }
}