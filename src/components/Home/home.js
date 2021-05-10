import React, { useEffect } from 'react';
import Header from '../partials/Header'
import Middel from '../Middel/Middel'
import Footer from '../partials/Footer'
import './home.css';
// import { appendScript } from '../../appendScript/appendScript'


const Home = () => {
    // useEffect(() => {
    //     appendScript("https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js")
    //     appendScript("https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.js")
    //     appendScript("https://kit.fontawesome.com/a076d05399.js")
    // }, []);
    return (
        <div className="home-page">
            <div className="home-div">
                <div className="Top_header_sec">
                    <Header />
                </div>
                <div className="middel_sec">
                    <Middel />
                </div>

                <div className="Footer-sec ddd">
                    <Footer />
                </div>
            </div>
        </div>
    )
}
export default Home;

