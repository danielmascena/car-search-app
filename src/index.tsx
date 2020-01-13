import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Index } from './views/cars/Index';
import '../server';
import './index.css';

import reducer from './reducers';

export const store = createStore(reducer);

render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('root')
);
