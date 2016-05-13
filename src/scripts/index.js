import React from 'react';
import ReactDOM from 'react-dom';
import Component from './Component';
import '../style/index.css';

window.onload = () => {
  ReactDOM.render(
    <Component />,
    document.querySelector('#container')
  );
};
