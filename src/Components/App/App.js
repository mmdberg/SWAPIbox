import React, { Component } from 'react';
import './App.css';
import { Scroll } from '../Scroll/index';
import { ButtonContainer } from '../ButtonContainer/index';
import { CardContainer } from '../CardContainer/index';
import { Route, Link } from 'react-router-dom';
import logo from '../../swapi-box-title.png';
import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opening: {},
      cards: [],
      errorStatus: '',
      favorites: []
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

  handleFavorites = (card) => {
    let oldFavorites = [...this.state.favorites];
    let checkMatch = 
      oldFavorites.filter(favorite => favorite.name === card.name);

    if (checkMatch.length > 0) {
      var favorites = 
      oldFavorites.filter(favorite => favorite.name !== card.name);
    } else {
      favorites = [...this.state.favorites, card];
    }

    this.setState({
      favorites
    });
  }

  clearCards = () => {
    this.setState({
      cards: [],
      favorites: []
    });
  }

  componentDidMount() {
    this.getOpening();
  }

  render() {
    return (
      <div className="App">
        <header className='header'>
          <Link to='/' onClick={() => this.clearCards()}>
            <img className="logo" src={logo} alt='logo'/>
          </Link>
        </header>
        <Route exact path='/' render={(() => {
          return (
            <Scroll opening={this.state.opening}/>
          );
        })} />
        <Route path='/home/' render={() => {
          return (
            <main>
              <ButtonContainer 
                getCards={this.getCards} 
                favorites={this.state.favorites}
              />
              {
                !this.state.cards.length &&
                <p className="button-instructions">
                  Choose a category to see cards:
                </p>
              }
              {
                this.state.cards.length > 0 &&
                <p className="card-instructions">
                  Click card to add to favorites
                </p>
              }
              <CardContainer cards={this.state.cards} 
                favorites={this.state.favorites} 
                changeFavorites={this.handleFavorites}/>
            </main>
          );
        }} />
        <Route exact path='/favorites' render={() => {
          return (
            <main>
              <ButtonContainer 
                getCards={this.getCards} 
                favorites={this.state.favorites}
              />
              <CardContainer cards={this.state.favorites} 
                favorites={this.state.favorites} 
                changeFavorites={this.handleFavorites}/>
              {
                !this.state.favorites.length && 
                <h3>There are no favorites saved.</h3>
              }
            </main>
          );
        }} 
        />
      </div>
    );
  }
}

App.propTypes = {
  buttonCall: PropTypes.func,
  openingCall: PropTypes.func
};

export default App;
