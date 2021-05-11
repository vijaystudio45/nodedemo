import React from 'react';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import Menu from '../partials/menu';
const Contact = ()=>{
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
                    <img className="Btmimg" src="images/bannarcontact20.png"/>
                        <div class="bannertest">
                           <div className="container">
                               <div class="aboutbannertext">
                            <h1 class="main-heading"><span>Conatct Us</span></h1>
							<h2 class="process-heading">We are always interested to hear from <br/>anyone who wishes to get in touch with us…</h2>
						    <p class="about-sub-heading"> We Are An Award Winning Enterprise Fully Focused On Designing, Developing, &amp; Improving Intellectual Properties For Your Business</p>
                            </div>
                        </div>
                    </div>
                </div>
			
			<div className="servicescontactpage1">
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
                        <div className="cotactlastsec">
                     
                        <div className="map">
                            <div className="map_left">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.340894340934!2d76.68899731400495!3d30.708815593838356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee56505158fd%3A0x6159fec086018b87!2sStudio45Creations.com!5e0!3m2!1sen!2sin!4v1620654203018!5m2!1sen!2sin" />
                            </div>
                          
                      
                        </div>
                        </div>
    </div>
	 <div className="Footer-sec">
    <Footer />
    </div>
</div>
        )}
export default Contact;