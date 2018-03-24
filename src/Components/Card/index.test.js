import React from 'react';
import { shallow } from 'enzyme';
import { Card } from './index';

describe('Card', () => {
  it('should match snapshot', () => {
    let mockInformation = {
      name: 'Alderaan',
      residents: ['Boba Fett', 'Lama Su']
    }
    let wrapper = shallow(<Card information={mockInformation}/>)
    expect(wrapper).toMatchSnapshot()
  })

  it('should call changeFavorites with the right parameters', () => {
    let mockInformation = {
      name: 'Bespin',
      terrain: 'swamp',
      residents: ['Boba Fett', 'Lama Su']
    }
    let mockFunction = jest.fn();
    let wrapper = shallow(<Card information={mockInformation} changeFavorites={mockFunction}/>)
    wrapper.find('div').simulate('click');
    expect(mockFunction).toHaveBeenCalledWith(mockInformation)

  })

  it('should make people card with people data', () => {
    let peopleMockInformation = {
      name: 'R2-D2',
      homeworld: 'ocean',
      homeworldPop: '45000000'
    }
    let mockFunction = jest.fn();
    let wrapper = shallow(<Card information={peopleMockInformation} changeFavorites={mockFunction}/>)
    wrapper.find('div').simulate('click');
    expect(wrapper).toMatchSnapshot()
  })

  it('should make planets card with planets data', () => {
    let planetsMockInformation = {
      name: 'Kamino',
      terrain: 'ocean',
      residents: ['Boba Fett', 'Lama Su']
    }
    let mockFunction = jest.fn();
    let wrapper = shallow(<Card information={planetsMockInformation} changeFavorites={mockFunction}/>)
    wrapper.find('div').simulate('click');
    expect(wrapper).toMatchSnapshot()
  })

  it('should make vehicles card with vehicles data', () => {
    let vehiclesMockInformation = {
      name: 'Sand Crawler',
      class: 'wheeled',
      passengers: '30'
    }
    let mockFunction = jest.fn();
    let wrapper = shallow(<Card information={vehiclesMockInformation} changeFavorites={mockFunction}/>)
    wrapper.find('div').simulate('click');
    expect(wrapper).toMatchSnapshot()
  })



})
