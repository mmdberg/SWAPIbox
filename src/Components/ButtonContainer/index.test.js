import React from 'react';
import { shallow } from 'enzyme';
import { ButtonContainer } from './index';

describe('Button Container', () => {

  let wrapper;
  let mockFunction;

  beforeEach(() => {
    mockFunction = jest.fn();
    wrapper = shallow(<ButtonContainer getCards={mockFunction}/>);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call getCards with text when people button is clicked', () => {
    wrapper.find('.people-button').simulate('click');
    expect(mockFunction).toHaveBeenCalledWith('people'); 
  });

  it('should call getCards with text when planets button is clicked', () => {
    wrapper.find('.planets-button').simulate('click');
    expect(mockFunction).toHaveBeenCalledWith('planets');
  });

  it('should call getCards with text when vehicles button is clicked', () => {
    wrapper.find('.vehicles-button').simulate('click');
    expect(mockFunction).toHaveBeenCalledWith('vehicles');
  });

});