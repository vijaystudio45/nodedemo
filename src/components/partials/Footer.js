import React from 'react';
import Menu from './menu';
import { NavLink } from 'react-router-dom';

const Footer = ()=>{
    return(
<div className="FooterPart">
    <div className="container">
        <div className="footer">
            <div className="logofooter">
                <a href="/"><img className="BtmLogo" src="images/logo-1.svg" alt="BigCo Inc. logo"/></a> 
                <p><b>Address:</b> Basement, Studio45 creations,<br/>F-174, Phase 8B, Industrial Area,<br/> Sector 74, Sahibzada Ajit Singh Nagar,<br/> Punjab 160055</p>
                <p><b>Stay Connected</b></p>
                <div className="CopyRight_Icon">
                <ul>
                <li>
                <a href="https://www.facebook.com/studio45creations/" target="_blank"><img className="iconimg" src="images/icon1.png" /></a>
                </li>
                <li>
                <a href="https://twitter.com/Studio45C" target="_blank"><img className="iconimg" src="images/icon12.png"/></a>
                </li>
                <li>
                <a href="https://www.linkedin.com/company/studio45creationss" target="_blank"><img className="iconimg" src="images/icon13.png"/></a>
                </li>
                </ul>
            </div>
            </div>
            <div className="Servicesfooter">
                <h3 className="footerTit">Services</h3>
                <ul>
                <li>
                <a href="">Hire Dedicated Developers</a>
                </li>
                <li>
                <a href="">Web Development</a>
                </li>
                <li>
                <a href="">UI/UX DESIGN</a>
                </li>
                <li>
                <a href="">S.E.O</a>
                </li>
                </ul>
            </div>
            <div className="Companyfooter">
                <h3 className="footerTit">Our Company</h3>
                <nav>
                
                <li>
                   <a href="/">Home</a>
                </li>
                <li>
                     <a href="/about">About Us</a>
                    
                </li>
                <li>
                <a href="/Services">Services</a>
                </li>
                <li>
                      <a href="/Portfolio">Portfolio</a>   
                </li>
                
                <li>
                      <a href="/contact">Contact Us</a> 
                </li>
               
       </nav>
            </div>
            <div className="Connectfooter">
                <h3 className="footerTit">Let’s Connect</h3>
                <p><b>Business Inquiries</b></p>
                <a href="info@studio45creations.com">info@studio45creations.com</a>
                <p><b>Careers</b></p>
                <a href="info@vijaya.logiclab@gmail.com">info@vijaya.logiclab@gmail.com</a>
                <p><b>Other Inquiries</b></p>
                <a href="info@studio45creations.com">info@studio45creations.com</a>
            </div>
        </div>
    </div>
    <div className="CopyRight_Text">
    <p>2013-2021 © Copyright studio45creations.com </p>
    </div>
</div>
    )}

    export default Footer;