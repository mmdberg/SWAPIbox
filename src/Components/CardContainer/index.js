import React from 'react';
import { Card } from '../Card/index';
import './styles.css';

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