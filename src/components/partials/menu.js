import React from 'react';
import { NavLink } from 'react-router-dom';
const Menu = ()=>{
    return(
  
         <div className="row">

                <nav>
                
                        <li>
                           <NavLink exact activeClassName to="/">SERVICES</NavLink>
                        </li>
                        <li >
                             <NavLink exact activeClassName to="/about">ABOUT US</NavLink>
                        </li>
                        <li>
                              <NavLink exact activeClassName to="">TEAM</NavLink>
                        </li>
                        <li>
                              <NavLink exact activeClassName to="">TESTIMONIALS</NavLink>   
                        </li>
                        <li>
                              <NavLink exact activeClassName to="">Blog</NavLink>
                        </li>
                        <li>
                              <NavLink exact activeClassName to="">Contact</NavLink> 
                        </li>
                        <li>
                             <i class="fa fa-search"></i>
                        </li>
               </nav>
          
             </div>
    

    )}

    export default Menu;