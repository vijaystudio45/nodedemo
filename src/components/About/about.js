import React from 'react';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
const About = ()=>{
        return (
            <div className="home-page">
                <div className="menu"><Header /></div>
                <div className="home-div">
                <div className="about_sec">
            <div className="container">
               <div className="row">
                   <div className="col-sm-6">
                      <h5>ABOUT US</h5>
                      <p className="leftAbout_Text"><b>At Studio45creations we believing in it, strive to achieve your dreams, through hard work, passion, allegiance, and perceptiveness.</b></p>
                      <img className="ceo-img" src="images/img-1.png"/>  
                   </div>
                   <div className="col-sm-6">
                        <p>We, at Studio45 Creations, endeavor to give you prominent structure benefits by offering inventiveness to procure for your organizations. We specialize in deploying all media services that make your business grow in a very cost-effective, easy and efficient manner.</p>
                        <p>We provide access to an entire range of services like Website Designing, Website Development, Graphic Designing, Search engine Optimization (SEO) and E-commerce.</p>
                   </div>
                 </div>
               <hr></hr>
                <div className="Always_Time">
                    <div className="row">
                       <div className="col-sm-3">
                            <h4 className="Alway_Time_title"><i className='fas fa-check'></i>Always on Time</h4>  
                        </div>  
                        <div className="col-sm-3">
                            <h4 className="Alway_Time_title"><i className='fas fa-check'></i>Ethical Approach</h4>  
                         </div>
                       <div className="col-sm-3">
                            <h4 className="Alway_Time_title"><i className='fas fa-check'></i>Regular Communication</h4>  
                        </div>
                       <div className="col-sm-3">
                           <h4 className="Alway_Time_title"><i className='fas fa-check'></i>Save Big With Us</h4>  
                       </div>
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
export default About;