import React from 'react';
import { Button } from '../Button/index'

export const ButtonContainer = ({getCards}) => {

  return (
    <div className='button-container'>
      <Button text='People' getCards={getCards}/>
      <Button text='Planets' getCards={getCards}/>
      <Button text='Vehicles' getCards={getCards}/>
    </div>
  )
}