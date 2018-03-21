import React, { Component } from 'react';
import './App.css';
import { Scroll } from '../Scroll/index'
import { Favorites } from '../Favorites/index';
import { ButtonContainer } from '../ButtonContainer/index';
import { CardContainer } from '../CardContainer/index';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opening: {},
      cards: [],
      errorStatus: ''
    }
  }

  getOpening = async () => {
    try { let opening = await this.props.openingCall()
    this.setState({ opening }) } catch (err) {
      this.setState({errorStatus: 'Error loading data'})
    }
  }

  getCards = async (userInput) => {
    try { let cards = await this.props.buttonCall(userInput)
     this.setState({ cards }) 
    } catch (err) {
      this.setState({errorStatus: 'Error loading data'})
     }
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
