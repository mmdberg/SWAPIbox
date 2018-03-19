import React, { Component } from 'react';
import './App.css';
import { Scroll } from '../Scroll/index'
import { Favorites } from '../Favorites/index';
import { ButtonContainer } from '../ButtonContainer/index';
import { CardContainer } from '../CardContainer/index';
import { openingCleaner } from '../../helpers/filmCleaner'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opening: ''
    }
  }

  getOpening = () => {
    console.log('hey')
    fetch('https://swapi.co/api/films/1/')
      .then(response => response.json())
      .then(data => this.setState({
        opening: openingCleaner(data)
      }))
      .catch(error => console.log(error))
  }

  getCards = () => {
    
  }

  componentDidMount() {
    this.getOpening()
  }

  render() {
    return (
      <div className="App">
        <header className='header'>
          <h1 className="logo">SWAPIbox</h1>
        </header>
        <Scroll text={this.state.opening}/>
        <Favorites />
        <ButtonContainer />
        <CardContainer />
      </div>
    );
  }
}

export default App;
