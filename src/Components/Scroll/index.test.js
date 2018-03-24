import React from 'react';
import { shallow } from 'enzyme';
import { Scroll } from './index';

describe('Scroll', () => {

    it('should match the snapshot', () => {
      let mockOpening = {
        text: "It is a period of civil war. Rebel spaceships.",
        title: "A New Hope",
        releaseYear: "1977"
       };
      let wrapper = shallow(<Scroll opening={mockOpening}/>)

      expect(wrapper).toMatchSnapshot()
    });
});