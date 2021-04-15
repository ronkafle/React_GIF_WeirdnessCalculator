import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from '../components/LandingPage';

it('renders without crashing', () => {
  const component = shallow(<LandingPage />);
  expect(component).toMatchSnapshot();
});
