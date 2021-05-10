import React from 'react';
import Menu from '../partials/menu';
import Footer from '../partials/Footer';
import Servicespage1 from '../jsx/Servicespage1';
import slugify from 'react-slugify';


const Servicespage = ()=>{
        return (
<div className="home-page">
    <div className="bannerpage">
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
        <div className="Secrvice_sec_left">
            <div className="Servicespagebanner_sec">
                <h1 class="main-heading2"><span>Services</span></h1>
                <p class="about-sub-heading2"><h1>{process.env.REACT_APP_TEST}</h1>{ process.env.REACT_APP_TEST } Innovation in the domain of technology solutions is constantly stamping its authority. This revolution is empowering technology to change the face and future of your industry entirely. Therefore, it is important for you to look for robust, flexible and custom solutions that help you reduce time-to-market, stay current, stable, competitive and agile for growth in the future. SoftProdigy believes in housing the wealth of experience to make sure you reap the benefits of the following technologies:</p>
            </div>
        </div> 
        <div className="Secrvicepost">
            <div className="Secrvice">
                    <div className="Secrvice_sec_right">
                            {Servicespage1.map((val,key)=>{
                            return(
                            <div className="secrvicetextsec12" key={key}>
                                 <div className="servicestext">
                                  <h2>{val.title}</h2>
                                    <p>{val.sname}</p>
                                    <div className="linksec">
                                       <li><a href="">{val.link1}</a> </li>
                                       <li><a href="">{val.link2}</a> </li>
                                       <li><a href="">{val.link3}</a> </li>
                                       <li><a href="">{val.link4}</a> </li>
                                       <li><a href="">{val.link5}</a> </li>
                                       <li><a href="">{val.link6}</a> </li>
                                       <li><a href="">{val.link7}</a> </li>
                                    </div>
                                    <div class="clickbtn">
                                       <a href={process.env.REACT_APP_TEST+"/services/"+slugify(val.title)}>CLICK FOR DETAIL</a> 
                                    </div> 
                                </div>
                                <div className="servicesimg"> 
                                <img className="Servicespageimg" src={val.imageSrc} />
                                </div>
                            </div>
                            )})}
                </div>   
            </div>
        </div>
        <div className="servicescontactpage">
        <div className="container">
            <div className="Brilliance">
                <h1> Now Is the Time to Craft Brilliance Together</h1>
                <p>Let’s get in touch and turn your idea into a brilliant reality. Go ahead & fill the form below:</p>
                <div className="Contact-secfrom">
                <li><input type="text" placeholder="First Name"/></li>
                <li><input type="text" placeholder="Last Name"/></li>
                <li><input type="email" placeholder="Email"/></li>
                <li><input type="text" placeholder="http://"/></li>
                <li>
                <select name="cars" id="cars">
                <option value="volvo">Country</option>
                <option value="saab">India</option>
                <option value="mercedes">United States</option>
                <option value="audi">Canada</option>
                <option value="audi">United Kingdom</option>
                </select>
               </li>
                <li><input type="number" placeholder="Phone"/></li>
                <li><textarea name="input_5" id="input_1_5"  placeholder="Message" /></li>
                <a className="submitbtn" href="">Submit Now</a>
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
export default Servicespage;