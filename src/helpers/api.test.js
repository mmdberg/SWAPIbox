import helpers from './api';

describe('api film helpers', () => {
  let before;

  beforeEach(() => {
    before = {
      "director": "George Lucas",
      "release_date": "1977-05-25",
      "producer": "Gary Kurtz, Rick McCallum",
      "title": "A New Hope",
      "opening_crawl": "It is a period of civil war."
    };
  });

  it('should clean year', () => {
    let before = "2005-05-19";
    let expected = "2005";
    expect(helpers.cleanYear(before)).toEqual(expected);
  });

  it('should create film object', () => {
    let expected = {
      text: "It is a period of civil war.",
      title: "A New Hope",
      releaseYear: "1977"
    };

    expect(helpers.filmCleaner(before)).toEqual(expected);
  });

  it('should call fetch with the correct params', () => {
    let expected = 'https://swapi.co/api/films/1/';

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(before)
    }));

    helpers.openingCall(1);

    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('should return movie object', async () => {
    let expected = {
      text: "It is a period of civil war.",
      title: "A New Hope",
      releaseYear: "1977"
    };

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(before)
    }));

    await expect(helpers.openingCall()).resolves.toEqual(expected);
  });
});

describe('api button helpers', () => {
  it('buttonCall should call fetch with correct params based on input', () => {
    let expected1 = 'https://swapi.co/api/people/';
    let expected2 = 'https://swapi.co/api/planets/';
    let expected3 = 'https://swapi.co/api/vehicles/';
    let beforePeople = {results: [{
      "gender": "Male",
      "homeworld": "https://swapi.co/api/planets/1/",
      "name": "Luke Skywalker",
      "species": ["https://swapi.co/api/species/1/"]
    }]};

    let beforePlanets = {results: [{
      "climate": "Arid",
      "name": "Tatooine",
      "population": "200000",
      "terrain": "Dessert",
      "orbital_period": "304",
      "residents": ["https://swapi.co/api/people/1/"]
    }]};

    let beforeVehicles = { results: [{
      "cargo_capacity": "50000",
      "crew": "46",
      "model": "Digger Crawler",
      "name": "Sand Crawler",
      "passengers": "30",
      "vehicle_class": "wheeled"
    }]};

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(beforePeople)
    }));

    helpers.buttonCall('people');
    expect(window.fetch).toHaveBeenCalledWith(expected1);

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(beforePlanets)
    }));

    helpers.buttonCall('planets');
    expect(window.fetch).toHaveBeenCalledWith(expected2);

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(beforeVehicles)
    }));

    helpers.buttonCall('vehicles');
    expect(window.fetch).toHaveBeenCalledWith(expected3);

  });


  it('should fetch homeworld with the right params', () => {
    let before = [{
      "homeworld": "https://swapi.co/api/planets/1/",
      "name": "Luke Skywalker",
      "species": ['https://swapi.co/api/species/3/']
    }];
    let expected = "https://swapi.co/api/planets/1/";

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(before)
    }));

    helpers.getHomeworld(before);

    expect(window.fetch).toHaveBeenCalledWith(expected);

  });

  it('should fetch species with the right params', () => {
    let before = [{
      "homeworld": "Tatooine",
      "name": "Luke Skywalker",
      "species": ['https://swapi.co/api/species/1/']
    }];
    let expected = 'https://swapi.co/api/species/1/';

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(before)
    }));

    helpers.getSpecies(before);

    expect(window.fetch).toHaveBeenCalledWith(expected);
  });


  it('should return clean people object', () => {
    let before = [{
      "gender": "Male",
      "homeworld": "Tatooine",
      "name": "Luke Skywalker",
      "species": "Human",
      "homeworldPop": "200000",
      "skin_color": "fair"
    }];
    
    let expected = [{
      "homeworld": "Tatooine",
      "name": "Luke Skywalker",
      "species": "Human",
      "homeworldPop": "200000"
    }];

    expect(helpers.cleanPeople(before)).toEqual(expected);
  });

  it.skip('should fetch Residents with correct params', async () => {
    let before = [{ climate: 'Arid',
      name: 'Tatooine',
      population: '200000',
      terrain: 'Dessert',
      residents: ['https://swapi.co/api/people/1/'] 
    }];
    let expected = 'https://swapi.co/api/people/1/';
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve('https://swapi.co/api/people/1/')
    }));

    helpers.getResidents(before);
    await expect(window.fetch).resolves.toHaveBeenCalledWith(expected);
  });


  it('should return clean planets data', () => {
    let beforePlanets = [{
      climate: "temperate, tropical",
      diameter: "10200",
      name: "Yavin IV",
      population: "1000",
      residents: [],
      terrain: "jungle, rainforests"
    }];

    let expected = [{
      climate:"temperate, tropical",
      name: "Yavin IV",
      population: "1000",
      residents: [],
      terrain: "jungle, rainforests"
    }];

    expect(helpers.cleanPlanets(beforePlanets)).toEqual(expected);
  });

  it('should return clean vehicle data', () => {
    let beforeVehicles = [{ 
      "cargo_capacity": "50000",
      "crew": "46",
      "model": "Digger Crawler",
      "name": "Sand Crawler",
      "passengers": "30",
      "vehicle_class": "wheeled"
    }];

    let expected = [{
      class: "wheeled",
      model: "Digger Crawler",
      name: "Sand Crawler",
      passengers: "30"
    }];

    expect(helpers.cleanVehicles(beforeVehicles)).toEqual(expected);
  });
});