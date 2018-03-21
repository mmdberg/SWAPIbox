import React, { Component } from 'react';
import './App.css';
import { Scroll } from '../Scroll/index'
import { Favorites } from '../Favorites/index';
import { ButtonContainer } from '../ButtonContainer/index';
import { CardContainer } from '../CardContainer/index';
import { openingCall, buttonCall } from '../../helpers/api';
import { filmCleaner } from '../../helpers/filmCleaner';
// import { peopleCleaner } from '../../helpers/peopleCleaner';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opening: {},
      cards: []
    }
  }

  getOpening = () => {
    openingCall()
    .then(data => this.setState({
        opening: filmCleaner(data)
      }))
    .catch(error => console.log(error))
  }

  getCards = (userInput) => {
    buttonCall(userInput)
    .then(cards => this.setState({
      cards
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
