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
      name: 'Alderaan',
      residents: ['Boba Fett', 'Lama Su']
    }
    let mockEvent = jest.fn();
    let wrapper = shallow(<Card information={mockInformation} changeFavorites={mockEvent}/>)
    wrapper.find('div').simulate('click');
    expect(mockEvent).toHaveBeenCalledWith(mockInformation)

  })

})
