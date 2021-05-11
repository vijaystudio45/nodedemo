import React from 'react';
import { NavLink } from 'react-router-dom';
const Menu = () => {
   return (

      <div className="row">

         <nav>

            <li>
			<a href="/">Home</a>
              
            </li>
            <li className="Submenu">
			<a href="/about">About Us</a>
              
            </li>
            <li className="Submenu">
               <a href="/Services">Services <i class="fa fa-sort-down"></i></a>
               <div className="dropdown-content Developmentmenu">
                  <div className="row">
                     <div className="col-sm-3">
                        <h3>Web Development</h3>
                        <ul>
                           <li> <a href="#">PHP Development</a></li>
                           <li> <a href="#">Rubby On Rails Development</a></li>
                           <li> <a href="#">Python Web Development</a></li>
                           <li> <a href="#">Facebook App Development</a></li>
                        </ul>
                     </div>
                     <div className="col-sm-3">
                        <h3>Mobile App Development</h3>
                        <ul>
                           <li> <a href="">iPhone App Development</a></li>
                           <li> <a href="">iPad App Development</a></li>
                           <li> <a href="">Android App Development</a></li>
                           <li> <a href="">Phone Gap</a></li>
                        </ul>
                     </div>
                     <div className="col-sm-3">
                        <h3>eCommerce</h3>
                        <ul>
                           <li> <a href="">PHP Development</a></li>
                           <li> <a href="">Rubby On Rails Development</a></li>
                           <li> <a href="">Python Web Development</a></li>
                           <li> <a href="">Facebook App Development</a></li>
                        </ul>
                     </div>
                     <div className="col-sm-3">
                        <h3>User Experience Design</h3>
                        <ul>
                           <li> <a href="">Web Design</a></li>
                           <li> <a href="">Logo Design</a></li>
                           <li> <a href="">Business Card</a></li>
                           <li><a href="">Brochures</a></li>
                           <li><a href="">Flyers</a></li>
                           <li> <a href="">Printing</a></li>
                        </ul>
                     </div>

                  </div>

               </div>
            </li>
            <li>
               <a href="/Portfolio">Portfolio</a>
            </li>

            <li>
               <a href="/contact">Contact Us</a>
            </li>

         </nav>

      </div>


   )
}

export default Menu;