import React from 'react';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import Menu from '../partials/menu';
const Homecontact = ()=>{
        return (
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
        )}
export default Homecontact;