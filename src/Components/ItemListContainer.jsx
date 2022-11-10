import React from "react";
import { useState,useEffect } from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Stack from '@mui/material/Stack';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import ItemList from "./ItemList";
import Data from "../data/data.json";

export default function ItemListContaainer ({ greetingWelcom,greeting,color,letra, boton,catalogo,productos}){

    const [cont, setCont] = useState(0);

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

            {catalogo? <ItemList/>:""}



        </div>
    )
}

