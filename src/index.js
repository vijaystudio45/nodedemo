import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/home';
import About from '../src/components/About/about';
import '../src/components/partials/style.css';
import Readmore from '../src/components/services/read-more';
import Services from '../src/components/services/services';


ReactDOM.render( 
  <>
  <Router>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path ='/about' exact component={About} />
      <Route path ='/services/:slug' exact component={Readmore} />
      <Route path ='/services' exact component={Services}/>
      
    </Switch>
  </Router>  
  </>,
  document.getElementById('root')
);
 
