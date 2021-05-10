import react from 'react';
import { useParams } from 'react-router-dom';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import slugify from 'react-slugify';
const ReadMore = ()=>{
const { slug } = useParams();
console.log(slug);
return(

   
<div class="top-sigl-page">
        <div className="Top_header_sec">
            <Header />
        </div>
        <div className="container">
            {   
                Servicespage1Data.map((val)=>{
                    if(slugify(val.title) == slug){                    
                        return(
                            <>
                            <div className="services_singlpage">
                             
                                     <div className="SinglPageImg">
                                         <img src={process.env.REACT_APP_ROOT_URL+"/"+val.imageSrc} />
                                     </div>
                                     <div className="SinglPageText">
                                     <h2>{val.title}</h2>
                                     <p> {val.content}</p>
                                    </div>
                              
                            </div>
                            </>                           
                        )
                    } 
                 }) 
            } 
              
        </div>
        <div className="Footer-sec">
           <Footer />
        </div>
  </div>
    )
}

export default ReadMore;