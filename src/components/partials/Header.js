import React from 'react';
import Menu from './menu';
import Banner from '../Card/banner';
import { NavLink } from 'react-router-dom';
const Header = ()=>{
    return(
        <div className="header-sec">
            <div className="container">
                <div className="logo-menu">
                    <div className="row">
                        <div className="col-sm-3 Logo-Sec">
                        <NavLink exact activeClassName to="/"><img src={ process.env.REACT_APP_ROOT_URL+"/images/logo-1.svg" } alt="BigCo Inc. logo"/></NavLink>
                        </div>
                        <div className="col-sm-9 Menu-Sec">
                           <Menu />
                        </div>
                    </div>
                </div>
            </div>
             {Banner.map((val)=>{
                        return(
                            <div className="bennar-sec">
                                <img src={process.env.REACT_APP_ROOT_URL+"/"+val.imgsrc}/>
                                
                                  
                            </div>
                        )})}

            
        </div>
    )}

    export default Header;