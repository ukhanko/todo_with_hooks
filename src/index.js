import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './style.scss';
import Application from './container/Application';
import reducer from './container/reducer';

const ROOT_CONTAINER_SELECTOR = 'root';
const LOCAL_STORE_NAME = 'todo-state';
const rootEl = document.getElementById(ROOT_CONTAINER_SELECTOR);

const store = createStore(reducer, (localStorage[LOCAL_STORE_NAME])
  ? JSON.parse(localStorage[LOCAL_STORE_NAME])
  : {});

store.subscribe(() => console.log('store: ', store.getState()));
store.subscribe(() => {
  localStorage[LOCAL_STORE_NAME] = JSON.stringify(store.getState());
});

render(
  <Provider store={store}>
    <Application />
  </Provider>,
  rootEl,
);
