import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import 'line-awesome/dist/line-awesome/css/line-awesome.css'

import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './routing';

ReactDOM.render(
  <Router>
    <Routing />
  </Router>,
  document.getElementById('root')
);