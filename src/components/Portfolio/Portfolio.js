import React from 'react';
import Footer from '../partials/Footer';
import Menu from '../partials/menu';
import Mockup from '../jsx/Mockup';
import Mixtape from '../jsx/Mixtape';
import Tshirts from '../jsx/Tshirts';
import Portfoliologo from '../jsx/Portfoliologo';
import Flyers from '../jsx/Flyers';
const Portfolio = ()=>{
        return (
            <div className="home-page">
                 <div className="abouttop">
                  <div className="banneraboutpage">
               <div className="container">
                    <div className="logo-menu">
                        <div className="row">
                            <div className="col-sm-3 Logo-Sec">
                            <a href="/"><img src="images/logo-1.svg" alt="BigCo Inc. logo"/></a>
                            </div>
                            <div className="col-sm-9 Menu-Sec">
                            <Menu />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="aboutbennar"> 
                <div className="Portfolio">
                    <div className="container">
                        
                    </div>
                </div>
            </div>
            <div className="portfolioflyer">
            <h1>PORTFOLIO</h1>
            <p>OUR LATEST FLYER DESIGN WORK</p>
            </div>
	     <div className="Portfoliopost">
                <div className="container">
                    <div className="tabbar">
                    <ul className="nav nav-tabs">
                        <li className="active"><a href="#Mockup">Mockup</a></li>
                        <li><a href="#Mixtape">Mixtape</a></li>
                        <li><a href="#T-Shirts">T-Shirts</a></li>
                        <li><a href="#Logos">Logos</a></li>
                        <li><a href="#Flyers">Flyers</a></li>
                    </ul>
                    </div>
                    <div className="tab-content">
                        <div id="Mockup" className="tab-pane fade in active">
                            <ul>
                                {Mockup.map((val,key)=>{
                                return(
                                <li key={key}>
                                <div className="simplimg">
                                <img src={val.imgsrc}/>
                                <div className="hovereffect1">
                                </div>
                                
                                </div>
                                </li>
                                )})}
                            </ul>
                        </div>
                        <div id="Mixtape" className="tab-pane fade">
                            <ul>
                                {Mixtape.map((val,key)=>{
                                return(
                                <li key={key}>
                                     <div className="simplimg">
                                <img src={val.imgsrc}/>
                                <div className="hovereffect1">
                                </div>
                                </div>
                                </li>
                                )})}
                            </ul>
                        </div>
                        <div id="T-Shirts" className="tab-pane fade">
                            <ul>
                                {Tshirts.map((val,key)=>{
                                return(
                                <li key={key}>
                                   <div className="simplimg">
                                <img src={val.imgsrc}/>
                                <div className="hovereffect1">
                                </div>
                                </div>
                                </li>
                                )})}
                            </ul>
                        </div>
                        <div id="Logos" className="tab-pane fade">
                            <ul>
                                {Portfoliologo.map((val,key)=>{
                                return(
                                <li key={key}>
                                 <div className="simplimg">
                                <img src={val.imgsrc}/>
                                <div className="hovereffect1">
                                </div>
                                </div>
                                </li>
                                )})}
                            </ul>
                        </div>
                        <div id="Flyers" className="tab-pane fade">
                            <ul>
                                {Flyers.map((val,key)=>{
                                return(
                                <li key={key}>
                               <div className="simplimg">
                                <img src={val.imgsrc}/>
                                <div className="hovereffect1">
                                </div>
                                </div>
                                </li>
                                )})}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	 <div className="Footer-sec">
    <Footer />
    </div>
</div>
        )}
export default Portfolio;