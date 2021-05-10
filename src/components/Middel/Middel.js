import React from 'react';
import company from "../Company/Company.css"
import Company from '../Company/Company';
import Work from '../jsx/Work';
import Logo from '../jsx/Logo';
import Testimonials from '../jsx/Testimonials';
import Address from '../jsx/Address';
import Services from '../services/services';
import Startups from '../jsx/Startups';
import Process from '../jsx/Process';
const Middel = ()=>{
    return(

        <div className="company">
            <Company /> 
            <div className="about_sec">
            <div className="container">
               <div className="row">
                   <div className="col-sm-6">
                      <h5>Helping Brands To Achieve Success</h5>
                      <p>At Studio45creations we believing in it, strive to achieve your dreams, through hard work, passion, allegiance, and perceptiveness.</p>
                      <p>We turn your concepts and specifications into business-ready software that meets the highest quality standards. From first prototype to finished product,</p>
                      <p>we take full responsibility for developing and managing the entire project.</p>
                   </div>
                   <div className="col-sm-6">
                       <h5>ABout us</h5>
                        <p>We, at Studio45 Creations, endeavor to give you prominent structure benefits by offering inventiveness to procure for your organizations. We specialize in deploying all media services that make your business grow in a very cost-effective, easy and efficient manner.</p>
                        <p>We provide access to an entire range of services like Website Designing, Website Development, Graphic Designing, Search engine Optimization (SEO) and E-commerce , Mern/Mean development , Mobile Apps development .</p>
                   </div>
                 </div> 
               </div>
            </div>
            <div className="container">
                <div className="CoreServicesSec">   
                    <div className="WhatWedo"> 
                        <h5 className="CoreServices">What we do</h5>
                        <p className="ExperienceText">We employ Agile, Lean methods to build robust products from conception to launch that people will actually use.</p>
                    </div>
                    <div className="WhatWedoServices">
                        <section className="services">
                        <Services />  
                        </section>
                    </div>
                </div> 
                </div>
                  <div className="Always_Sec">
                <div className="container">    
                <hr/>  
                    <div className="Always_Time">
                  <h4 className="ExperienceTitle">The Studio45 Creations Experience</h4>
                  <p className="ExperienceText">Our Proven, Comprehensive Process For Exceptional Results</p>
                    <div className="row">
                       <div className="col-sm-3 AlwaySec">
                            <h4 className="Alway_Time_title">Always on Time</h4> 
                            <p className="Alway_Time_title">Adherence to Time Schedule</p> 
                        </div>  
                        <div className="col-sm-3 AlwaySec">
                            <h4 className="Alway_Time_title">Ethical Approach</h4>
                            <p className="Alway_Time_title">Driven by Integrity, Honesty, Dedication and Commitment.</p>   
                         </div>
                       <div className="col-sm-3 AlwaySec">
                            <h4 className="Alway_Time_title">Regular Communication</h4>
                            <p className="Alway_Time_title">Well informed of the progress.</p>   
                        </div>
                       <div className="col-sm-3 AlwaySec">
                           <h4 className="Alway_Time_title">Save Big With Us</h4> 
                           <p className="Alway_Time_title">Get More Done in Minimal Cost</p>  
                       </div>
                    </div>
               </div> 
               </div>  
               </div>
                <div className="Process_sec">
                    <div className="container">
                        <div className="SeasiaProcess">
                            <div className="OurProcess_sec_left">
                                <h1>Our Process</h1>
                                <p>Our belief in deploying advanced evolutions in digital era accelerates clients’ revenues by maintaining their constructive repute.Quality is never an accident; it is always the result of high intention, sincere effort, intelligent direction and skillful execution; it represents the wise choice of many alternatives.</p>
                                <img src="images/grow.png"/>
                            </div>
                            <div className="OurProcess_sec_right">
                                <ul>
                                    {Process.map((val,key)=>{
                                    return(
                                    <li key={key}>
                                    <h2>{val.title}</h2>
                                    <h3>{val.text}</h3>
                                    <img src={val.imgsrc}/>
                                    </li>
                                    )})}
                                </ul>
                           </div>
                        </div>
                    </div>
                </div>

                <div className="WhyChoose">
                    <div className="container">
                        <h5 className="CoreServices h5title">Why Choose Studio45Creations!</h5>
                        <p className="ExperienceText">We are an all in one IT company that is offering extremely impressive and satisfying solutions for all type of IT requirements.</p>
                        <div className="WhyChoosePost">
                            <div className="WhyChoseUs">
                                <i className="fa fa-edit fa-4x fa-fw"></i>  
                                <h3 className="h3">We Keep You Updated</h3>
                                <p className="text-lead">We keep you posted with a single point of contact on all milestone completion.</p>
                            </div>
                            <div className="WhyChoseUs">
                                <i class="fa fa-clock-o"></i>
                                <h3 className="h3">We Deliver On Time</h3>
                                <p className="text-lead">We deliver as promised in a reasonable time with quality & perfection.</p>
                            </div>
                            <div className="WhyChoseUs">
                                <i class="fa fa-hand-o-right"></i>
                                <h3 className="h3">We Get It Completed</h3>
                                <p className="text-lead">We deliver the project by making sure that the final product we deliver perfectly matches your requirements.</p>
                            </div>
                        </div>
                        <div className="ClientsSec">
                            <div className="ClientsProjects">
                                <h2 className="ClientsProjectsTitle">130 +</h2>
                                <p className="counter-text">Clients Projects</p>
                            </div>
                            <div className="ClientsProjects">
                                <h2 className="ClientsProjectsTitle">30 +</h2>
                                <p className="counter-text">Creative nerds under one roof</p>
                            </div>
                            <div className="ClientsProjects">
                                <h2 className="ClientsProjectsTitle">5</h2>
                                <p className="counter-text">Upwork Rating</p>
                            </div>
                        </div>
                    </div>
                </div>

            <div className="Decoding_Sec">
                <h3 className="font16">DECODING studio45creations</h3>
                <p className="font14">Turning your ambitions into reality, by merging experience with<br/> technology is our competence</p>
                <div className="container">
                    <div className="DecodingTurning ">
                        <div className="DecodingTurning_left"> 
                            <ul className="nav nav-tabs">
                                <li className="active"><a data-toggle="tab" href="#Company">Company</a></li>
                                <li><a data-toggle="tab" href="#Life">Life at Trantor</a></li>
                                <li><a data-toggle="tab" href="#Careers">Careers</a></li>
                            </ul>
                        </div>
                        <div className="DecodingTurning_Right"> 
                            <div className="tab-content">
                                <div id="Company" className="tab-pane fade in active">
                                    <div class="DecodingTurning_Img_text">
                                        <div className="DecodingTurning_text">
                                            <h3>With a global presence across 5 nations.</h3>
                                            <p>Trantor embraces technology and innovative approach to exceed the client’s expectations. Our Ethics of unparalleled quality, competent communication, and outstanding solution experts help us pave the way to your success. We pledge to create an exceptional future for your business by accelerating your strategy through technology.</p>
                                        </div>
                                        <div className="DecodingTurning_img">
                                          <img className="Btmimg" src="images/img1.png"/>
                                        </div>
                                    </div>
                                </div>
                                <div id="Life" className="tab-pane fade">
                                    <div class="DecodingTurning_Img_text">
                                        <div className="DecodingTurning_text">
                                           <h3>A workplace that resonates happiness...</h3>
                                           <p>You spend around 40 hours a week with your colleagues, at Trantor there’s never a minute when you don’t enjoy it. From celebrating festivities to surprise b’day bashes, from fun games to cool team building activities we do it all.  We are a diverse and inclusive organization where you can grow, innovate, and make a difference across the world one IT solution at a time.</p>
                                        </div>
                                        <div className="DecodingTurning_img">
                                           <img className="Btmimg" src="images/img2.png"/>
                                        </div>
                                    </div>
                                </div>
                                <div id="Careers" className="tab-pane fade">
                                    <div class="DecodingTurning_Img_text">
                                    <div className="DecodingTurning_text">
                                        <h3>Come & Join the Celebration!!</h3>
                                        <p>Trantor is a friendly, warm, and creative family of more than 700 people who are spread across the globe but are knitted together by the wool of technology. We are ordinary humans building extraordinary digital experiences. We work, we explore, we have fun!!</p>
                                    </div>
                                    <div className="DecodingTurning_img">
                                        <img className="Btmimg" src="images/img3.png"/>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

                <div className="Logo_Sec">
                    <div className="container">
                        <div className="logo">
                            {Logo.map((val,key)=>{
                            return(
                            <div key={key} className="logo_img">
                            <img src={val.imgsrc}/>
                            </div>
                            )})}
                        </div> 
                    </div>
                </div>


        

      
 
                <div className="Itbeen">
                    <div className="container">
                          <h5 class="CoreServices">It’s been <img className="imgeight" src="images/unnamed.png" /> Years</h5>
                          <p class="ExperienceText">The Studio45creations has powered the web’s most successful applications that covers every aspect of website and application development, including UI designing till launching and marketing it among the audience.</p>
                        <div className="Startups_Sec">    
                            {Startups.map((val,key)=>{
                            return(
                            <div key={key} className="Startups">
                                <img src={val.imgsrc}/>
                                <h2 className="Location_title">{val.title}</h2>
                                <p className="Location_text">{val.Text}</p>
                                <p className="Location_text">{val.Number}</p>
                                <p className="Location_text">{val.Email}</p>
                                <p className="Location_text">{val.ceoemail}</p>
                            </div>
                            )})}
                        </div>
                    </div>
                </div>
                <div className="testimonials">
                    <div className="container">
                            <h5 className="CoreServices">What Our Clients Say!</h5>
                            <p class="ExperienceText">Our team strongly believes in delivering effective experiences. See what our clients have to say about our people, services and solutions.</p>
                        <div className="Testimonials-post">
                            <div className="Testimonials-sec">
                                {Testimonials.map((val,key)=>{
                                return(
                                <div key={key} className="testimonials_slider">
                                <img className="testimonials-img"  src={val.imgsrc}/> 
                                <h1>{val.title}</h1>
                                <p>{val.text}</p>
                                </div>
                                )})}
                            </div>
                        </div>
                    </div>
                </div>
            <div className="Contactus">
                <div className="container">
                    <div className="Address_Sec">
                    <h5 class="CoreServices">CONTACTS US</h5>
                    <p class="ExperienceText">Any Questions? Contact us Freely and We'll Get Back to You Shortly</p>
                    </div>
                    <div className="Location_Email_Sec">
                        {Address.map((val,key)=>{
                        return(
                        <div key={key} className="Location">
                            <img src={val.imgsrc}/>
                            <h2 className="Location_title">{val.title}</h2>
                            <p className="Location_text">{val.Text}</p>
                            <p className="Location_text">{val.Number}</p>
                            <p className="Location_text">{val.Email}</p>
                            <p className="Location_text">{val.ceoemail}</p>
                        </div>
                        )})}
                </div>
                <div className="Contact-form">
                  <h3>Ready To Start A Project?</h3>  
                  <p>We are too! Contact us and we’ll be in touch with you very shortly. We’re really fast.</p>
                      <ul className="formsec">
                          <li><a className="BtnContact" href="">Contact Us</a></li>
                          <li><a className="BtnTalk" href="">Talk To Experts</a></li>
                        </ul>
                  </div>
                </div>
            </div>
    </div>

    
    )}

    export default Middel;





  