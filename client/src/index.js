import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './containers/App';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

const renderRoot = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  renderRoot
);
