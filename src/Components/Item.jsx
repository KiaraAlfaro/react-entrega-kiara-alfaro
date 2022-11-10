import React from "react";



export default function Item ({nombre,precio,id}){

    return(
        

        <>
            <h3>{nombre}</h3>
            <p>${precio}</p>
            <button id={id}> Ver mas info+</button>

           
            
        </>
    )
    
}




    
 