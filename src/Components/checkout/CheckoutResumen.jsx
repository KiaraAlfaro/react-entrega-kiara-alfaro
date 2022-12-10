import React from "react";
import './resumen.css';


export default function CheckoutResumen ({product}){

   
 
    return(
 
        
        <div className="cardsResumen">

            <img className="imgResumen" src={product.img} alt="" />
            <div className="itemInfo">
                
                <h4>{product.nombre}</h4>
            </div>
            
            <div className="itemInfo">
                
                <h4>x{product.quantity}</h4>
            </div>

            <div className="itemInfo">
                
                <h4>${product.precio}</h4>
            </div>
            
            <div className="itemInfo">
               
                <h4>${product.quantity * product.precio}</h4>
            </div>
            
            
        </div> 
        
    )
}