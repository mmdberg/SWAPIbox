import React from 'react';
import './styles.css';

export const Card = (props) => {

  if (props.information.homeworld) {
    return (
      <div className={props.className} onClick={() => 
      props.changeFavorites(props.information)}>
        <h3>{props.information.name}</h3>
        <ul>
          <li>Species: {props.information.species}</li>
          <li>Homeworld: {props.information.homeworld}</li>
          <li>{props.information.homeworldPop}</li>
        </ul>
      </div>
    );
  } else if (props.information.terrain) {
    let residents = props.information.residents.map((resident, index) =>  
      <li key={index}>{resident}</li>);
    return (
      <div className={props.className} onClick={() => 
      (props.changeFavorites(props.information))}>
        <h3>{props.information.name}</h3>
        <ul>
          <li>Terrain: {props.information.terrain}</li>
          <li>Population: {props.information.population}</li>
          <li>Climate: {props.information.climate}</li>
          <li>Residents:<ul>{residents}</ul> </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className={props.className} onClick={() => 
      (props.changeFavorites(props.information))}>
        <h3>{props.information.name}</h3>
        <ul>
          <li>Model: {props.information.model}</li>
          <li>Class: {props.information.class}</li>
          <li>Passengers: {props.information.passengers}</li>
        </ul>
      </div>
    );
  }
};