import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MainComponent from './component/MainComponent';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<MainComponent />, document.getElementById('root'));
registerServiceWorker();
