import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import HeroCard from './HeroCard';
import { Card } from 'react-bootstrap';

configure({adapter: new Adapter()});

const mock = {
  hero: {
    id: 101,
    name: 'The Incredible Hulk',
    thumbnail: {
      path: '',
      extension: ''
    }
  }
};

describe('<HeroCard />', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HeroCard hero={mock.hero} />);
  });

  it('Check if the card has a title.', () => {
    wrapper.setProps(mock);
   // expect(wrapper.find(Card.Title)).toHaveLength(1);
  });
});