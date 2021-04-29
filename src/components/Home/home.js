import React from 'react';
import Header from '../partials/Header'
import Middel from '../Middel/Middel'
import Footer from '../partials/Footer'
import './home.css';


const Home = ()=>{
        return (
            <div className="home-page">
                <div className="home-div">
                    <div className="Top_header_sec">
                        <Header />
                    </div>
                    <div className="middel_sec"> 
                         <Middel />
                    </div>
                   
                    <div className="Footer-sec">
                      <Footer />
                    </div>
                </div>
            </div>
        )}
export default Home;

