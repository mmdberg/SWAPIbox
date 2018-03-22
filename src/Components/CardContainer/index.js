import React from 'react';
import { Card } from '../Card/index';

export const CardContainer = ({cards, changeFavorites}) => {
  let cardList = cards.map((card, index) => 
    <Card information={card} key={index} changeFavorites={changeFavorites}/>);

  return (
    <div className='card-container'>
      {cardList}
    </div>
  );
};