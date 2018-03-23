import React, { Component } from 'react';
import './App.css';
import { Scroll } from '../Scroll/index';
import { ButtonContainer } from '../ButtonContainer/index';
import { CardContainer } from '../CardContainer/index';
import { Route, Link } from 'react-router-dom';
import logo from '../../swapi-box-title.png';
// import createBrowserHistory from 'history'

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

  componentDidMount() {
    this.getOpening();
  }

  render() {
    return (
      <div className="App">
        <header className='header'>
          <Link to='/'>
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
              <Link to='/favorites' className='changeMain'>
                FAVORITES:  
                {this.state.favorites.length ? 
                  this.state.favorites.length : 
                  '(Zero Saved)'}
              </Link>
              <ButtonContainer getCards={this.getCards}/>
              <CardContainer cards={this.state.cards} 
                favorites={this.state.favorites} 
                changeFavorites={this.handleFavorites}/>
            </main>
          );
        }} />
        <Route exact path='/favorites' render={({history}) => {
          return (
            <main>
              <button onClick={history.goBack} 
                className='changeMain'>
                BACK TO ALL CARDS
              </button>
              <CardContainer cards={this.state.favorites} 
                favorites={this.state.favorites} 
                changeFavorites={this.handleFavorites}/>
            </main>
          );
        }} />
      </div>
    );
  }
}

export default App;
