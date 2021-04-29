import React from 'react';

const Card = (Props)=>{
    return(
        <div className="cards">
        <div className="card">
             <img src={Props.imgsrc}/>  
            <div className="card_info">
               <span className ="caed_category">{Props.title}</span>
               <h3 className="card_title">Test</h3>
               <a href="" target="_blank">
                <button>Send</button>
               </a>
            </div>
        </div>        
    </div>
    )}

    export default Card;