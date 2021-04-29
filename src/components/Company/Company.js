
 import React from 'react';
 import Design from '../jsx/Design';
 
 const Company = ()=>{
     return(
         <div className="CompanyServices">
              <div className="container">
                 <div className="DesignBuildDeliver">
                   {Design.map((val)=>{
                         return(
                      <div className=" Design">
                           <img className ="logo-icon" src={val.imgsrc}/>
                           <h2 className="DesignTitle">{val.title}</h2>
                           <p className="DesignText">{val.text}</p>
                      </div>
                       )})}
                      
                 </div>
             </div>
        </div>
     )}
 
     export default Company;