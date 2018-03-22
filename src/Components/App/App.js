import React, { Component } from 'react';
import './App.css';
import { Scroll } from '../Scroll/index';
import { Favorites } from '../Favorites/index';
import { ButtonContainer } from '../ButtonContainer/index';
import { CardContainer } from '../CardContainer/index';
import { Route, Link } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opening: {},
      cards: [],
      errorStatus: ''
    };
  }

  getOpening = async () => {
    let randomMovie = Math.floor(Math.random() * 8);
    try { 
      let opening = await this.props.openingCall(randomMovie);
      this.setState({ opening });
    } catch (error) {
      this.setState({
        errorStatus: 'Error loading data'
      });
    }
  }

  getCards = async (userInput) => {
    try { 
      let cards = await this.props.buttonCall(userInput);
      this.setState({ cards });
    } catch (error) {
      this.setState({
        errorStatus: 'Error loading data'
      });
    }
  }

  componentDidMount() {
    this.getOpening();
  }

  render() {
    return (
      <div className="App">
        <header className='header'>
          <Link to='/'>
            <h1 className="logo">SWAPIbox</h1>
          </Link>
        </header>
        <Route exact path='/' render={(() => {
          return(
            <Scroll opening={this.state.opening}/>
          )
        } )} />
        <Route exact path='/favorites' component={ Favorites } />
        <Route path='/home/' render={() => {
          return (
          <main>
            <ButtonContainer getCards={this.getCards}/>
            <CardContainer cards={this.state.cards}/>
          </main>
          )
        }} />

      </div>
    );
  }
}

export default App;
