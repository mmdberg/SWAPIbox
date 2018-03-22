import React, { Component } from 'react';
import './App.css';
import { Scroll } from '../Scroll/index';
import { Favorites } from '../Favorites/index';
import { ButtonContainer } from '../ButtonContainer/index';
import { CardContainer } from '../CardContainer/index';
import { Route, Link, NavLink } from 'react-router-dom';

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
    let oldFavorites = [...this.state.favorites]
    let checkMatch = oldFavorites.filter(favorite => favorite.name === card.name)
    
    if (checkMatch.length > 0) {
      var favorites = oldFavorites.filter(favorite => favorite.name !== card.name)
    } else {
      var favorites = [...this.state.favorites, card]
    }

    this.setState({
      favorites
    })



  }

  // removeFromFavorites = (card) => {
  //   console.log(card)
  //   let allFavorites = [...this.state.favorites]
  //   let favorites = allFavorites.filter(favorite => favorite.name !== card.name)
  //   this.setState({
  //     favorites
  //   })
  // }

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
        <Route path='/home/' render={() => {
          return (
            <main>
              <NavLink to='/favorites' className='changeMain'>FAVORITES</NavLink>
              <ButtonContainer getCards={this.getCards}/>
              <CardContainer cards={this.state.cards} changeFavorites={this.handleFavorites}/>
            </main>
          )
        }} />
        <Route exact path='/favorites' render={() => {
          return(
            <main>
              <NavLink to='/home/' className='changeMain'>BACK TO ALL CARDS</NavLink>
              <CardContainer cards={this.state.favorites} changeFavorites={this.handleFavorites}/>
            </main>
          )
          }} />
      </div>
    );
  }
}

export default App;
