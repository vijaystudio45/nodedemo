import React from 'react';
import company from "../Company/Company.css"
import Company from '../Company/Company';
import Work from '../jsx/Work';
import Logo from '../jsx/Logo';
import Testimonials from '../jsx/Testimonials';
import Address from '../jsx/Address';
import Services from '../services/services';
import Startups from '../jsx/Startups';
import Team from '../jsx/Team';

const Middel = ()=>{
    return(

        <div className="company">
            <Company /> 
            <div className="about_sec">
            <div className="container">
               <div className="row">
                   <div className="col-sm-6">
                      <h5>Helping Brands <br/>To Achieve Success</h5>
                      <p className="leftAbout_Text">At Studio45creations we believing in it, strive to achieve your dreams, through hard work, passion, allegiance, and perceptiveness.</p>
                   </div>
                   <div className="col-sm-6">
                       <h5>ABout us</h5>
                        <p>We, at Studio45 Creations, endeavor to give you prominent structure benefits by offering inventiveness to procure for your organizations. We specialize in deploying all media services that make your business grow in a very cost-effective, easy and efficient manner.</p>
                        <p>We provide access to an entire range of services like Website Designing, Website Development, Graphic Designing, Search engine Optimization (SEO) and E-commerce.</p>
                   </div>
                 </div>
               <hr></hr>
                <div className="Always_Time">
                  <h4 className="ExperienceTitle">The Studio45 Creations Experience</h4>
                  <p className="ExperienceText">Our Proven, Comprehensive Process For Exceptional Results</p>
                    <div className="row">
                       <div className="col-sm-3 AlwaySec">
                            <h4 className="Alway_Time_title"><i className='fas fa-check'></i>Always on Time</h4> 
                            <p className="Alway_Time_title">Adherence to Time Schedule</p> 
                        </div>  
                        <div className="col-sm-3 AlwaySec">
                            <h4 className="Alway_Time_title"><i className='fas fa-check'></i>Ethical Approach</h4>
                            <p className="Alway_Time_title">Driven by Integrity, Honesty, Dedication and Commitment.</p>   
                         </div>
                       <div className="col-sm-3 AlwaySec">
                            <h4 className="Alway_Time_title"><i className='fas fa-check'></i>Regular Communication</h4>
                            <p className="Alway_Time_title">Well informed of the progress.</p>   
                        </div>
                       <div className="col-sm-3 AlwaySec">
                           <h4 className="Alway_Time_title"><i className='fas fa-check'></i>Save Big With Us</h4> 
                           <p className="Alway_Time_title">Get More Done in Minimal Cost</p>  
                       </div>
                    </div>
               </div>
               </div>
            </div>
            <div className="container">
                        <div className="working">
                            {Work.map((val)=>{
                            return(
                                <li className=" Howwork">
                                    <h3 className="WorkTime_Title">{val.title}</h3>
                                    <h2 className="WorkTime_Text">{val.subtitle}</h2>
                                    <p className="Planningtext">{val.text}</p>
                                </li>
                            )})}  
                        </div>
                        <div className="CoreServices">   
                            <h5 className="CoreServices">What we do</h5>
                            <p className="ExperienceText">We employ Agile, Lean methods to build robust products from conception to launch that people will actually use.</p>
                            <section className="services">
                                <Services />  
                            </section>
                        </div> 
                    </div>
                    <div className="WhyChoose">
                        <div className="container">
                            <h5 className="CoreServices h5title">Why Choose Us!</h5>
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
                <div className="container">
                    <div className="logo">
                        {Logo.map((val)=>{
                        return(
                        <div className="logo_img">
                        <img src={val.imgsrc}/>
                        </div>
                        )})}
                    </div> 
                </div>

<div className="Team">
    <div className="container">
    <h5 className="CoreServices h5title">Our Team</h5>
        <div className="OurTeam">
        {Team.map((val)=>{
                            return(
            <div className="CompanyTeam">
              <img src={val.imgsrc}/>
              <div className="title-text">
              <h3>{val.title}</h3>
              <p>{val.text}</p>
              </div>
           </div>
            )})}
        </div>
    </div>
</div>


                <div className="Itbeen">
                    <div className="container">
                          <h5 class="CoreServices">It’s been <img className="imgeight" src={ process.env.REACT_APP_ROOT_URL+"/images/unnamed.png" }/> Years</h5>
                          <p class="ExperienceText">The Studio45creations has powered the web’s most successful applications that covers every aspect of website and application development, including UI designing till launching and marketing it among the audience.</p>
                        <div className="Startups_Sec">    
                            {Startups.map((val)=>{
                            return(
                            <div className="Startups">
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
                                {Testimonials.map((val)=>{
                                return(
                                <div className="testimonials_slider">
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
                    <h5 class="CoreServices">CONTACTS</h5>
                    <p class="ExperienceText">Any Questions? Contact us Freely and We'll Get Back to You Shortly</p>
                    </div>
                    <div className="Location_Email_Sec">
                        {Address.map((val)=>{
                        return(
                        <div className="Location">
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





  