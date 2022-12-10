import React from "react";
import { useCartContext } from "../../context/CartContext";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './itemCart.css';



export default function ItemCart ({product}){

    const{removeProduct} = useCartContext();

    return(
 
         
        <div className="cardsItem">

            <img className="imgCart" src={product.img} alt="" />

            
            <div className="itemInfo">
                <h3>Producto</h3>
                <h4>{product.nombre}</h4>
            </div>
            
            <div className="itemInfo">
                <h3>Cantidad</h3>
                <h4>{product.quantity}</h4>
            </div>

            <div className="itemInfo">
                <h3>Precio ud.</h3>
                <h4>${product.precio}</h4>
            </div>
            
            <div className="itemInfo">
                <h3>Subtotal</h3>
                <h4>${product.quantity * product.precio}</h4>
            </div>
            
            
            
            <div >
                
                <Stack onClick = {() => removeProduct(product.id)}  direction="row" spacing={2} >
                    
                    <Button className="botonEliminar" >
                    Eliminar
                    </Button>
                
                </Stack>
                
            </div> 

        </div> 
        
    )
}