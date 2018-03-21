import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  it('renders without crashing', () => {
    let wrapper = shallow(<App />)
    expect(wrapper).toBeDefined()
  })

//snapshot of render

//state start empty

//getOpening method
//opening state is updated with text, title and year on page load
//if theres an error it updated error state(change this)

//getCards
//that its run with right parameter
//that it set states with new card array
//that it updates state with error(change this)


})
