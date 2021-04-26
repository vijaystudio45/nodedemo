import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './components/Home/home';

import Menu from '../src/components/Menu/menu';

ReactDOM.render(
  <>
  <Router>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/menu' exact component={Menu} />
    </Switch>
  </Router>  
  </>,
  document.getElementById('root')
);
 
