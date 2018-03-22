import React from 'react';
import './styles.css';

export const Card = (props) => {

  if (props.information.homeworld) {
    return (
      <div className='card' onClick={() => (props.changeFavorites(props.information))}>
        <h3>{props.information.name}</h3>
        <p>{props.information.species}</p>
        <p>{props.information.homeworld}</p>
        <p>{props.information.homeworldPop}</p>
      </div>
    );
  } else if (props.information.terrain) {
    let residents = props.information.residents.map((resident, index) =>  
      <p key={index}>{resident}</p>);
    return (
      <div className='card' onClick={() => (props.changeFavorites(props.information))}>
        <h3>{props.information.name}</h3>
        <p>{props.information.terrain}</p>
        <p>{props.information.population}</p>
        <p>{props.information.climate}</p>
        <section>
          <p>Residents:</p>
          {residents}
        </section>
      </div>
    );
  } else {
    return (
      <div className='card' onClick={() => (props.changeFavorites(props.information))}>
        <h3>{props.information.name}</h3>
        <p>{props.information.model}</p>
        <p>{props.information.class}</p>
        <p>{props.information.passengers}</p>
      </div>
    );
  }
};