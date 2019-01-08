import React from 'react';
import { render } from 'react-dom';
import './style.scss';
import Application from './Application';

const ROOT_CONTAINER_SELECTOR = 'root';
const rootEl = document.getElementById(ROOT_CONTAINER_SELECTOR);

render(
  <Application />,
  rootEl,
);
