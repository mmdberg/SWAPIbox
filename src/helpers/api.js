const SWroot = 'https://swapi.co/api/';

const getHomeworld = (PeopleData) => {
  let promises = PeopleData.map(async character => {

    let response = await fetch(character.homeworld);
    let people = await response.json();
    return await ({...character, homeworld: people.name, 
      homeworldPop: people.population})
    })
  return Promise.all(promises)
}

const getSpecies = (PeopleData) => {
  let promises = PeopleData.map(async character => {
    let response = await fetch(character.species[0])
    let person = await response.json()
    return await ({...character, species: person.name})
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
  let planetPromises = PlanetData.map(async planet => {
    let residentPromises = planet.residents.map(async residentURL => {
      let response = await fetch(residentURL)
      let resident = await response.json()
      return await resident.name
    })
    let residentsArr = await Promise.all(residentPromises)
    return await ({...planet, residents: residentsArr})
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

export const buttonCall = async (input) => {
  let response = await fetch(`${SWroot}${input}/`)
  let data = await response.json()

  if (input === 'people') {
    let homeworld = await getHomeworld(data.results)
    let people = await getSpecies(homeworld)
    return cleanPeople(people)
  } else if (input === 'planets') {
    let planets = await getResidents(data.results)
    return cleanPlanets(planets)
  } else {
    return cleanVehicles(data.results)
  }
}

const cleanYear = (date) => {
    let releaseArray = date.split('-')
    return releaseArray[0] 
  }

const filmCleaner = (data) => {
  return {
    text: data.opening_crawl,
    title: data.title,
    releaseYear: cleanYear(data.release_date)
  }
}

export const openingCall = async (number) => {
  let response = await fetch(`${SWroot}films/${number}/`)
  let movie = await response.json()
  return filmCleaner(movie)
}

export default {
  cleanYear,
  filmCleaner,
  openingCall,
  buttonCall
}