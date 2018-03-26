import React from 'react';
import { shallow } from 'enzyme';
import { CardContainer } from './index';

describe('Card Container', () => {
  it('should match the snapshot', () => {
    let mockCards = [{ 
      name: 'Alderaan',
      climate: 'swamp'
    }];

    let wrapper = 
      shallow(<CardContainer cards={mockCards} favorites={mockCards}/>);
    expect(wrapper).toMatchSnapshot();
  });

});