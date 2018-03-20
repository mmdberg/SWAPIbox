import { openingCleaner } from '../filmCleaner';

export const buttonCall = () => {


  //return API address
}


export const openingCall = () => {
  let randomMovie = Math.floor(Math.random() * 8)
    return fetch(`https://swapi.co/api/films/${randomMovie}/`)
      .then(response => response.json())
      .then(data => this.setState({
        opening: openingCleaner(data)
      }))
      .catch(error => console.log(error))
}