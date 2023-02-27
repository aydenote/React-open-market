import React from 'react';
import ReactDOM from 'react-dom/client';
import rootReducer from './reducers/index';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './App';

const enhancer =
  process.env.NODE_ENV === 'production' ? compose(applyMiddleware()) : composeWithDevTools(applyMiddleware(logger));
const store = createStore(rootReducer, enhancer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
