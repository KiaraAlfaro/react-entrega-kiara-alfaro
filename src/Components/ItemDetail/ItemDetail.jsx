import React from "react";
import './ItemDetail.css'; 
import { Link } from "react-router-dom";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Stack from '@mui/material/Stack';

import ItemCount from '../itemCount/ItemCount';

import { useState,useEffect } from "react";

import { useCartContext } from "../../context/CartContext";


export default function  ItemDetail ({product}) {

    const [irCarrito,setIrCarrito]=useState(false)
    const [cont, setCont] = useState(1);

    const {addProduct} = useCartContext();

    const onAdd = (cantidad) =>{

      setIrCarrito(true);
      addProduct (product,cantidad)
    }

   
        
    return(
        <>
         <div className="detalle">

            <img className="imgDetalle" src={product.img} alt="" />

            <div className="info">
                <h3 className="tituloDetalle">{product.nombre}</h3>
                <h3>{product.info}</h3>
                <h3>{product.pago}</h3>
                <h3>Cantidad de Stock: {product.productos}</h3>
                <h1>${product.precio}</h1>

                
                {
                    irCarrito
                    ?<Link to='/cart'>
                        <Stack direction="row" spacing={2}>

                            <Button variant="contained" color="success" className="terminar" >
                            Terminar compra
                            </Button>

                        </Stack>
                    </Link>:
               
                    <div className="contador" >

                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button

                    onClick = {() => {

                        if(cont>=1 & cont< `${product.productos}` ){setCont(cont+1)}

                    }}
                    >+</Button>

                    <Button>{cont}</Button>

                    <Button

                    onClick = {() => {

                        if (cont>1 & cont<=`${product.productos}`){setCont(cont-1)}
                        
                    }} 
                    >-</Button>
                    </ButtonGroup>  

                    </div>
                }
                 {
                    irCarrito
                    ?<Link to='/'>
                        
                        <Stack direction="row" spacing={2}>

                            <Button  variant="contained" color="success" className="seguir">
                            Seguir comprando<ShoppingCartRoundedIcon/>
                            </Button>

                        </Stack>

                    </Link>:
               
                        <div className="botonComprar">

                        <Stack direction="row" spacing={2}>

                            <Button 

                            onClick = {() => { onAdd(cont)}} 

                            variant="contained" color="success" >
                            Agregar al carrito <ShoppingCartRoundedIcon/>
                            </Button>

                        </Stack>
                    </div>   
} 
            </div>  

            </div> 
        </>
        
    );
}
