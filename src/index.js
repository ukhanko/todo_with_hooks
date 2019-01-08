import React from 'react';
import { render } from 'react-dom';
import './style.scss';
import Menu from './components/Menu';

const ROOT_CONTAINER_SELECTOR = 'root';
const rootEl = document.getElementById(ROOT_CONTAINER_SELECTOR);

render(<Menu />, rootEl);
