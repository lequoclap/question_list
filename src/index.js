import React from 'react';
import {render} from 'react-dom';
import { Provider} from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './components/App';

import 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';
// import 'material-icons';
import './index.css';

let store = createStore(reducer);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
