import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import rootReducer from './modules'
import ReduxThunk from 'redux-thunk';

const container = document.getElementById('root');
const root = createRoot(container);

const store = createStore(rootReducer, applyMiddleware(ReduxThunk, logger));

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
