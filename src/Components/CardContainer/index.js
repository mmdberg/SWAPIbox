import React from 'react';
import { Card } from '../Card/index';

export const CardContainer = ({cards}) => {
  let cardList = cards.map((card, index) => 
    <Card information={card} key={index}/>)
  return (
    <div className='card-container'>
      {cardList}
    </div>
  )
}