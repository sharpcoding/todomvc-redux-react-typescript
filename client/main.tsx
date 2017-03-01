import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store, createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './main/components/App';
import rootReducer from './main/reducer';

const initialState = {};

var reduxDevtoolsExtensionCallback = window['__REDUX_DEVTOOLS_EXTENSION__'];
const store: Store<any> = createStore(rootReducer, reduxDevtoolsExtensionCallback && reduxDevtoolsExtensionCallback());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);