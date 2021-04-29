import React, {useState} from 'react';
import ServicesData from "../jsx/Services";
import slugify from 'react-slugify';

const Services = ()=>{
    return( 

            <>       
            {   
                ServicesData.map((val)=>{
                    return(
                        <>   
                            <li>
                                
                                <div className="image"><img src={val.imageSrc} /></div>
                                <div className="title"><a href={process.env.REACT_APP_ROOT_URL+"/services/"+slugify(val.title)}>{val.title}</a></div>
                                <div className="content">{val.content.slice(0, 150)}</div>
                                                           
                               
                            </li>
                        </>
                        )   
                    }
                    )                 
            }
            </>
        )
    }      


export default Services;