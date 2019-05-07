import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { CharactersList } from './CharactersList';
import HeroCard from './card/HeroCard';

configure({adapter: new Adapter()});

describe('<CharactersList />', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CharactersList />);
  });

  it('Check wether the correct number of Cards are shown.', () => {
        wrapper.setProps(mock);
        expect(wrapper.find(HeroCard)).toHaveLength(2);
  });
});

const mock = {
    heroes: [{id: "01"}, {id: "02"}],
    error: false,
    isLoaded: true,
}