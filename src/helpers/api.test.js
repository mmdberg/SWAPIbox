import React from 'react';
import helpers from './api';

describe('api film helpers', () => {
  let before 

  beforeEach(() => {
    before = {
      "director": "George Lucas",
      "release_date": "1977-05-25",
      "producer": "Gary Kurtz, Rick McCallum",
      "title": "A New Hope",
      "opening_crawl": "It is a period of civil war.",
    }
  })

  it('should clean year', () => {
    let before = "2005-05-19"
    let expected = "2005"
    expect(helpers.cleanYear(before)).toEqual(expected)
  })

  it('should create film object', () => {
    let expected = {
      text: "It is a period of civil war.",
      title: "A New Hope",
      releaseYear: "1977"
    }

    expect(helpers.filmCleaner(before)).toEqual(expected)
  })

  it('should call fetch with the correct params', () => {
    let expected = 'https://swapi.co/api/films/1/'

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(before)
    }))

    helpers.openingCall(1)

    expect(window.fetch).toHaveBeenCalledWith(expected)
  })

  it('should return movie object', async () => {
    let expected = {
      text: "It is a period of civil war.",
      title: "A New Hope",
      releaseYear: "1977"
    }

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(before)
    }))

    await expect(helpers.openingCall()).resolves.toEqual(expected)
  })
})

describe('api button helpers', () => {
  it('should call fetch with correct params based on input', async () => {
    let expected1 = 'https://swapi.co/api/people/'
    let expected2 = 'https://swapi.co/api/planets/'
    let expected3 = 'https://swapi.co/api/vehicles/'
    let before = {
      "birth_year": "19 BBY",
      "gender": "Male",
      "homeworld": "https://swapi.co/api/planets/1/",
      "name": "Luke Skywalker",
      "species": [
        "https://swapi.co/api/species/1/"
        ]
      }

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve()
    }))

    await expect(helpers.buttonCall('people')).resolves.toEqual(expected1)
    await expect(helpers.buttonCall('planets')).resolves.toEqual(expected2)
    await expect(helpers.buttonCall('vehicles')).resolves.toEqual(expected3)


  })




})