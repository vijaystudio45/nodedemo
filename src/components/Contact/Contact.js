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
                <div className="contactsec">
                    <div className="container">
                        
                    </div>
                </div>
            </div>
			
			<div className="contactsecpage">
                            <div className="contactsec_left">
                            </div>
                                <div className="contactsec_right">
                                    <div class="contactform">
                                        <li>
                                            <label>Your name</label><br/>
                                            <input type="text" name="your-name"/>
                                        </li>
                                        <li>
                                            <label>Your emai</label><br/>
                                            <input type="email" name="your-email" />
                                        </li>
                                        <li>
                                            <label> Subject</label><br/>
                                            <input type="text" name="your-subject"/>
                                        </li>
                                        <li>
                                            <label> Your Message</label><br/>
                                            <textarea name="your-message" />
                                        </li>
                                        <li>
                                        <a className ="contatbtnsubmit" href="">submit</a>
                                        </li>
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