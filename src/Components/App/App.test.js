import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {

  it('matches the snapshot', () => {
    let wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should start with empty states', () => {
    let wrapper = shallow(<App />, {disableLifecycleMethods: true});
    let expectedState = {
      opening: {},
      cards: [],
      errorStatus: '',
      favorites: []
    };
    
    expect(wrapper.state()).toEqual(expectedState);
  });

  it('getOpening should update state with text, title and year', async () => {
    let expectedOpening = {
      text: "It is a period of civil war. Rebel spaceships.",
      title: "A New Hope",
      releaseYear: "1977"
    };
    let mockOpeningCall = jest.fn().mockImplementation(() => {
      return expectedOpening;
    });
    let wrapper = shallow(<App openingCall={mockOpeningCall}/>);

    await wrapper.instance().getOpening();
    expect(wrapper.state('opening')).toEqual(expectedOpening);

  });

  it('getOpening should set error state on error', async () => {
    let wrapper = shallow(<App />);

    window.fetch = jest.fn().mockImplementation(() => Promise.reject(
      status: 404
    ));
    const expected = 'Error loading data';

    await wrapper.instance().getOpening();
    expect(wrapper.state('errorStatus')).toEqual(expected);
  });

  it('getCards should update cards state', async () => {
    let expected = {
      class: "wheeled",
      model: "Digger Crawler",
      name: "Sand Crawler",
      passengers: "30"
    };
    let mockButtonCall = jest.fn().mockImplementation(() => {
      return expected;
    });
    let wrapper = shallow(<App buttonCall={mockButtonCall}/>);

    await wrapper.instance().getCards('vehicles');
    expect(wrapper.state('cards')).toEqual(expected);
  });

  it('getCards should set error state on error', async () => {
    let wrapper = shallow(<App />);

    window.fetch = jest.fn().mockImplementation(() => Promise.reject(
      status: 404
    ));

    const expected = 'Error loading data';

    await wrapper.instance().getCards('vehicles');
    expect(wrapper.state('errorStatus')).toEqual(expected);
  });

  it('handleFavorites should add card to favorites if not in there', () => {
    let wrapper = shallow(<App />);
    let mockCard = {
      class: "wheeled",
      model: "Digger Crawler",
      name: "Sand Crawler",
      passengers: "30"
    };

    wrapper.instance().handleFavorites(mockCard);
    expect(wrapper.state('favorites')).toEqual([mockCard]);
  });

  it('handleFavorites should remove card from favorites if there', () => {
    let wrapper = shallow(<App />);
    let mockCard = {
      class: "wheeled",
      model: "Digger Crawler",
      name: "Sand Crawler",
      passengers: "30"
    };

    wrapper.setState({
      favorites: [mockCard]
    });
    wrapper.instance().handleFavorites(mockCard);
    expect(wrapper.state('favorites')).toEqual([]);
  });

  it('clearCards should reset cards and favorites in state', () => {
    let wrapper = shallow(<App />);
    let mockCard = {
      class: "wheeled",
      model: "Digger Crawler",
      name: "Sand Crawler",
      passengers: "30"
    };

    wrapper.setState({
      cards: mockCard,
      favorites: mockCard
    })

    wrapper.instance().clearCards()
    expect(wrapper.state('cards')).toEqual([])
    expect(wrapper.state('favorites')).toEqual([])

  })

});
