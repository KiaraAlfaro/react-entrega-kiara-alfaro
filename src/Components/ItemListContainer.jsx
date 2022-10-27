import React from "react";

export default function ItemListContaainer ({ greetingWelcom,greeting,color,letra}){

    return(
        
        <div style={{background:color, fontSize:letra}}>

            { greetingWelcom? <p>Bienvenido a ARKI!!</p>:""}
            { greeting ? <p>Vuelva pronto!!</p> :""}
        </div>
    )
}