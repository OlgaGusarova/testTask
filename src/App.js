import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import './App.css';
import MainComponent from './component/MainComponent';
import store from './redux/Store';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <MainComponent/>
        </Router>
      </Provider>
    );
  }
}

export default App;

