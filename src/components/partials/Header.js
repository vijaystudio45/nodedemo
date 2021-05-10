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
                        <NavLink to="/" exact activeClassName><img src="images/logo-1.svg" alt="BigCo Inc. logo"/></NavLink>
                        </div>
                        <div className="col-sm-9 Menu-Sec">
                           <Menu />
                        </div>
                    </div>
                </div>
            </div>
			<div className="homepagebennar">
             {Banner.map((val,key)=>{

                        return(

                            <div key={key} className="bennar-sec">
                                <img src={val.imgsrc}/>
                            </div>
                        )})}

            </div>
        </div>
    )}

    export default Header;