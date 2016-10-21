import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

var imageArray = [
  {name: 'Image1', link: 'MockUp0.png'},
  {name: 'Image2', link: 'MockUp1.png'},
  {name: 'Image3', link: 'MockUp2.png'},
  {name: 'Image4', link: 'MockUp3.png'},
  {name: 'Image5', link: 'MockUp4.png'}
];

ReactDOM.render(
  <App array= {imageArray}/>,
  document.getElementById('root')
);

ReactDOM.render(
  <Dropdown />,
  document.getElementById('dropdown')
);