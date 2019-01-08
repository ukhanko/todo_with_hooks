import React from 'react';
import { render } from 'react-dom';
import './style.scss';
import Toolbar from './components/Toolbar';
import Content from './components/Content';

const ROOT_CONTAINER_SELECTOR = 'root';
const rootEl = document.getElementById(ROOT_CONTAINER_SELECTOR);

render(
  <div>
    <Toolbar />
    <Content />
  </div>,
  rootEl,
);
