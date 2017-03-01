import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store, createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import App from './main/components/App';
import rootReducer from './main/reducer';

//this is the callback function required in order to have this Chrome extension https://github.com/zalmoxisus/redux-devtools-extension working
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
const store: Store<any> = createStore(rootReducer, composeEnhancers(applyMiddleware()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);