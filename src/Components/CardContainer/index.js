import React from 'react';
import { Card } from '../Card/index';
import './styles.css';
import PropTypes from 'prop-types';

export const CardContainer = ({cards, changeFavorites, favorites}) => {

  let cardList = cards.map((card, index) => {
    let result = 'card';

    favorites.forEach(favorite => {
      if (favorite.name === card.name){
        result = 'card favorite';
      }
    });
        
    return <Card 
      information={card} 
      className={result} 
      key={index} 
      changeFavorites={changeFavorites}
    />;
  });

  return (
    <div className='card-container'>
      {cardList}
    </div>
  );
};

CardContainer.propTypes = {
  cards: PropTypes.array,
  changeFavorites: PropTypes.func,
  favorites: PropTypes.array
}