import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Favorites from '../components/Favorites';
import configureStore from "../store";

const store = configureStore();

describe('Component: Favorites', () => {
  let component = null;
  
  beforeEach(() => {
    component = shallow(
      <Provider store={store}>
        <Favorites />
      </Provider>
    );
  });

  it('renders without crashing', () => {
    expect(component).toMatchSnapshot();
  });
});



