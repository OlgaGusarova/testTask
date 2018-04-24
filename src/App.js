import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import './App.css';
import MainRouter from './component/MainRouter';
import store from './redux/Store';

const history = createBrowserHistory();

class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <Router history={history}>
          <MainRouter/>
        </Router>
      </Provider>
    );
  }
}

export default App;

