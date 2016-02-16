import React from 'react';
import ReactDOM from 'react-dom';
import FishList from './components/FishList.js';

var fish = ["Gädda", "Ål", "Mört"];

ReactDOM.render(
  <FishList fish={fish} />,
  document.getElementById('main')
);