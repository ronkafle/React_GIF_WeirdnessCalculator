import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "../LandingPage";
import configureStore from '../../store';
import Header from '../Header';
import ResultsPage from '../ResultsPage';

const store = configureStore();

function App() {
  return (
    <div className="App">
      <Header />
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/result">
              <ResultsPage />
            </Route>
            <Route exact path="/">
              <LandingPage />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
