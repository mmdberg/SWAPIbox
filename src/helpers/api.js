const SWroot = 'https://swapi.co/api/'

const getHomeworld = () => {
  return fetch
}


export const buttonCall = (input) => {
  return fetch(`https://swapi.co/api/${input}/`)
        .then(response => response.json())
        .then(data => getHomeworld(data.homeworld))

  //return API address
}

export const homeworldCall = () => {

}


export const openingCall = () => {
  let randomMovie = Math.floor(Math.random() * 8)
  return fetch(`https://swapi.co/api/films/${randomMovie}/`)
        .then(response => response.json())
  // console.log(openingObject)
  // return openingObject
}