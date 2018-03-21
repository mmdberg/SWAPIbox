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
  let planetPromises = PlanetData.map(planet => {
    let residentPromises = planet.residents.map(residentURL => {
      return fetch(residentURL)
      .then(response => response.json())
      .then(data => data.name)
      
    })
    return Promise.all(residentPromises)
    .then(data => ({...planet, residents: data}))
  })
  return Promise.all(planetPromises)
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

const cleanVehicles = (VehicleData) => {
  let cleanVehiclesList = VehicleData.reduce((vehicleArray, vehicle) => {
    let vehicleObject = Object.keys(vehicle).reduce((vehicleObj, characteristic) => {
      vehicleObj.name = vehicle.name;
      vehicleObj.model = vehicle.model;
      vehicleObj.class = vehicle.vehicle_class;
      vehicleObj.passengers = vehicle.passengers;
      return vehicleObj
    }, {})
    vehicleArray.push(vehicleObject)
    return vehicleArray
  }, [])
  return cleanVehiclesList
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
  } else {
    return fetch('https://swapi.co/api/vehicles/')
      .then(response => response.json())
      .then(data => cleanVehicles(data.results))
  }

}

export const openingCall = () => {
  let randomMovie = Math.floor(Math.random() * 8)
  return fetch(`https://swapi.co/api/films/${randomMovie}/`)
        .then(response => response.json())

  // console.log(openingObject)
  // return openingObject
}