import React from 'react';
import { Button } from '../Button/index'

export const ButtonContainer = () => {

  return (
    <div className='button-container'>
      <Button text='People'/>
      <Button text='Planets'/>
      <Button text='Vehicles'/>
    </div>
  )
}