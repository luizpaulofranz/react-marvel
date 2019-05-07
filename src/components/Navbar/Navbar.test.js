import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Navbar from './Navbar';

configure({adapter: new Adapter()});

describe('<Navbar />', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Navbar />);
  });

  it('Check if navbar has two items.', () => {
    expect(wrapper.find('ul > li')).toHaveLength(2);
  });
});