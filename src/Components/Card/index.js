import React, { Component } from 'react';
import './styles.css'

export class Card extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className='card'>
        <h3>{this.props.name}</h3>
      </div>
  )}
}