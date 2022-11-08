import React from "react";
import { useState } from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Stack from '@mui/material/Stack';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';


export default function ItemListContaainer ({ greetingWelcom,greeting,color,letra, boton}){

    const [cont, setCont] = useState(0);
    const stock = 15;

    const onAdd = (cantidad) =>{

        alert(`Agregaste al carrito: ${cantidad}`)
    }

    return(
        
        <div style={{background:color, fontSize:letra}}>

            { greetingWelcom? <p>Bienvenido a ARKI!!</p>:""}
            { greeting ? <p>Vuelva pronto!!</p> :""}


            {boton? <div>

                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button
            
                onClick = {() => {

                    if(cont>=0 & cont<= 14 ){setCont(cont+1)}
                    
                }}
                >+</Button>

                <Button>{cont}</Button>

                <Button

                onClick = {() => {

                    if (cont>=1 & cont<=15){setCont(cont-1)}
                    
                }} 
                >-</Button>
                </ButtonGroup>  

                <Stack direction="row" spacing={2}>
            
                <Button 
                
                onClick = {() => { onAdd(cont)}} 

                variant="contained" color="success" >
                Agregar al carrito <ShoppingCartRoundedIcon/>
                </Button>
                
                </Stack>

            </div>:""}

        </div>
    )
}

