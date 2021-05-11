import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/home';
import About from '../src/components/About/about';
import '../src/components/partials/style.css';
import Readmore from '../src/components/services/read-more';
import Services from '../src/components/services/services';
import Contact from '../src/components/Contact/Contact';
import Testimonials from '../src/components/Testimonials/Testimonials';
import Servicespage from '../src/components/Servicespage/Servicespage';
import Portfolio from '../src/components/Portfolio/Portfolio';

// useEffect(() => {
//   const scriptTag = document.createElement('script');
//   scriptTag.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
//   document.head.appendChild(scriptTag);
// },[])

ReactDOM.render(

  <>
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/services/:slug' exact component={Readmore} />
       
        <Route path='/contact' exact component={Contact} />
        <Route path='/testimonials' exact component={Testimonials} />
        <Route path='/Services' exact component={Servicespage} />
        <Route path='/Portfolio' exact component={Portfolio} />
        

      </Switch>
    </Router>
  </>,
  document.getElementById('root')
);

