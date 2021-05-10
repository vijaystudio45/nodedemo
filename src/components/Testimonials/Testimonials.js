import React from 'react';
import Menu from '../partials/menu';
import Footer from '../partials/Footer';

const Testimonials = ()=>{
        return (
            <div className="home-page">
              <div className="bannerTestimonialspage">
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
                <div className="Testimonials_banner">
                      <img className="Btmimg" src="images/tes1.png"/>
                        <div className="bannertestTestimonials">
                            <h1>Client Testimonials</h1>
                        </div>
                </div>

                    <div className="Testimonials_sec">
                    <div className="container">
                        <div className="Clients">
                         <h2> Our Clients Love Us</h2>
                         <h3>What They Say</h3>
                      </div>
                        </div>

                    </div>


               </div>            
                <div className="Footer-sec">
                <Footer />
                </div>
            </div>
        )}
export default Testimonials;