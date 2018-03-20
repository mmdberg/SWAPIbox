// const SWroot = 'https://swapi.co/api/'

const getHomeworld = (PeopleData) => {
  let promises = PeopleData.map(person => {

    return fetch(person.homeworld)
      .then(response => response.json())
      .then(data => ({...person, homeworld: data.name, homeworldPop: data.population}))
    })
  return Promise.all(promises)
}

const getSpecies = (PeopleData) => {
  let promises = PeopleData.map(person => {

    return fetch(person.species[0])
      .then(response => response.json())
      .then(data => ({...person, species: data.name}))
    })
  return Promise.all(promises)
}

const cleanPeople = (PeopleData) => {
  let cleanPeopleList = PeopleData.reduce((peopleArr, person) => {
    let personObject = Object.keys(person).reduce((personObj, characteristic) => {
      personObj.name = person.name;
      personObj.species = person.species;
      personObj.homeworld = person.homeworld;
      personObj.homeworldPop = person.homeworldPop
      return personObj
    }, {})
    peopleArr.push(personObject)
    return peopleArr
  }, [])
  return cleanPeopleList
}

const getResidents = (PlanetData) => {
  let planetData = PlanetData.map(planet => {
    let residentPromises = planet.residents.map(residentURL => {
      return fetch(residentURL)
      .then(response => response.json())
      .then(data => data.name)
    })
    return ({...planet, residents: Promise.all(residentPromises)})
  })
  return planetData
}

const cleanPlanets = (PlanetData) => {
  let cleanPlanetsList = PlanetData.reduce((planetArray, planet) => {
    let planetObject = Object.keys(planet).reduce((planetObj, characteristic) => {
      planetObj.name = planet.name;
      planetObj.terrain = planet.terrain;
      planetObj.population = planet.population;
      planetObj.climate = planet.climate;
      planetObj.residents = planet.residents
      return planetObj
    }, {})
    planetArray.push(planetObject)
    return planetArray
  }, [])
  return cleanPlanetsList
}


export const buttonCall = (input) => {
  if (input === 'people') {
    return fetch('https://swapi.co/api/people/')
      .then(response => response.json())
      .then(data => getHomeworld(data.results))
      .then(data => getSpecies(data))
      .then(data => cleanPeople(data))
    } else if (input === 'planets') {
    return fetch('https://swapi.co/api/planets/')
      .then(response => response.json())
      .then(data => getResidents(data.results))
      .then(data => cleanPlanets(data))
    }

}

export const openingCall = () => {
  let randomMovie = Math.floor(Math.random() * 8)
  return fetch(`https://swapi.co/api/films/${randomMovie}/`)
        .then(response => response.json())

  // console.log(openingObject)
  // return openingObject
}