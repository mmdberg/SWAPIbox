import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import { planetImages, peopleImages, vehicleImages } 
  from '../../helpers/card-images';

export const Card = (props) => {
  if (props.information.homeworld) {
    return (
      <div className={props.className} onClick={() => 
        props.changeFavorites(props.information)}>
        <section className="show people-list">
          <img src={peopleImages[props.information.name]} alt=""/>
          <h3 className="people-title">{props.information.name}</h3>
        </section>
        <section className="hide people-list">
          <h3 className="people-title">{props.information.name}</h3>
          <ul>
            <li>Species: {props.information.species}</li>
            <li>Homeworld: {props.information.homeworld}</li>
            <li>Homeworld Population: {props.information.homeworldPop}</li>
          </ul>
        </section>
      </div>
    );
  } else if (props.information.terrain) {
    let residents = props.information.residents.map((resident, index) =>  
      <li key={index} className="long-list">{resident}</li>);
    return (
      <div className={props.className} onClick={() => 
        (props.changeFavorites(props.information))}>
        <section className="show">
          <img src={planetImages[props.information.name]} alt=""/>
          <h3 className="planets-title">{props.information.name}</h3>
        </section>
        <section className="hide planet-list">
          <h3 className="planets-title">{props.information.name}</h3>
          <ul>
            <li>Terrain: {props.information.terrain}</li>
            <li>Population: {props.information.population}</li>
            <li>Climate: {props.information.climate}</li>
            {
              residents.length > 0 ? 
                <li>Residents:<ul>{residents}</ul> </li> : 
                <li>No Residents</li>
            }
          </ul>
        </section>
      </div>
    );
  } else {
    return (
      <div className={props.className} onClick={() => 
        (props.changeFavorites(props.information))}>
        <section className="show">
          <img src={vehicleImages[props.information.name]} alt=""/>
          <h3 className="vehicles-title">{props.information.name}</h3>
        </section>
        <section className="hide vehicle-list">
          <h3 className="vehicles-title">{props.information.name}</h3>
          <ul>
            <li>Model: {props.information.model}</li>
            <li>Class: {props.information.class}</li>
            <li>Passengers: {props.information.passengers}</li>
          </ul>
        </section>
      </div>
    );
  }
};

Card.propTypes = {
  information: PropTypes.object,
  changeFavorites: PropTypes.func,
  className: PropTypes.string
};