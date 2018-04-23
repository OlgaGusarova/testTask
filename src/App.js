import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import './App.css';
import MainComponent from './component/MainComponent';
import store from './redux/Store';

const history = createBrowserHistory();

class App extends React.Component {
  render() {
    return(
        <null/>
    );
  }
}

export default App;

