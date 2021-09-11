import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import './App.css';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from './reducers';
import {createLogger} from 'redux-logger';

const loggerMIddleware = createLogger();

const store = createStore(rootReducer, applyMiddleware(loggerMIddleware)); 

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);

reportWebVitals();
