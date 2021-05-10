
 import React from 'react';

 const Decding = ()=>{
     return(
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
     )}
 
     export default Decding;