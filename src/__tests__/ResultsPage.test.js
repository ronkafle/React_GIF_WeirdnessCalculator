import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import ResultsPage from '../components/ResultsPage';
import configureStore from "../store";

const store = configureStore();

describe('Component: ResultsPage', () => {
  let component = null;

  beforeEach(() => {
    component = shallow(
      <Provider store={store}>
        <ResultsPage />
      </Provider>
    );
  });
  it('renders without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <ResultsPage />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
