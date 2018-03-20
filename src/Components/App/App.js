import React, { Component } from 'react';
import './App.css';
import { Scroll } from '../Scroll/index'
import { Favorites } from '../Favorites/index';
import { ButtonContainer } from '../ButtonContainer/index';
import { CardContainer } from '../CardContainer/index';
import { openingCall } from '../../helpers/api'
import { peopleCleaner } from '../../helpers/peopleCleaner';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opening: {},
      cards: []
    }
  }

  getOpening = () => {
    let randomMovie = Math.floor(Math.random() * 8)
    fetch(`https://swapi.co/api/films/${randomMovie}/`)
      .then(response => response.json())
      .then(data => this.setState({
        opening: openingCleaner(data)
      }))
      .catch(error => console.log(error))
  }

  getCards = (userInput) => {
    console.log(userInput)
    fetch(`https://swapi.co/api/${userInput}/`)
      .then(response => response.json())
      .then(data => this.setState({
        cards: peopleCleaner(data)
      }))
      .catch(error => console.log(error))
  }

  componentDidMount() {
    this.getOpening();
  }

  render() {
    return (
      <div className="App">
        <header className='header'>
          <h1 className="logo">SWAPIbox</h1>
        </header>
        <Scroll opening={this.state.opening}/>
        <Favorites />
        <ButtonContainer getCards={this.getCards}/>
        <CardContainer cards={this.state.cards}/>
      </div>
    );
  }
}

export default App;
