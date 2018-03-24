import React from 'react';
import { shallow } from 'enzyme';
import { ButtonContainer } from './index';

describe('Button Container', () => {
  it('should match snapshot', () => {
    let wrapper = shallow(<ButtonContainer />)
    expect(wrapper).toMatchSnapshot()
  })

  //test that onclick has been called with right parameters

})