import React from "react";
import { useCartContext } from "../../context/CartContext";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import ItemCart from "../itemCart/ItemCart";
import AttachMoneyTwoToneIcon from '@mui/icons-material/AttachMoneyTwoTone';
import AddShoppingCartTwoToneIcon from '@mui/icons-material/AddShoppingCartTwoTone';
import './cart.css';

export default function Cart ({product}){

    const {cart, totalPrecio} = useCartContext();

    if(cart.length === 0){
        return(
            <>
                <div className="noProductos">

                    <h3 className="cartel"> No hay productos en el carrito!</h3>
                    <Link to='/' className="masCompras">
            
                        <Stack direction="row" spacing={2} >
                
                            <Button >
                                Hacer Compras <AddShoppingCartTwoToneIcon/>
                            </Button>
            
                        </Stack>
                    </Link>   
                </div>
            </>
        );
    }

    return(

        
        <div >

            {
                cart.map(product => <ItemCart key={product.id} product={product}/>)
            }
            <div className="botonTotal" >
                <p className="nombreTotal">TOTAL:</p>
                <p>${totalPrecio()}</p>
            </div>

            <div className="botones">

                
            <Link to='/' >
           
                <Stack direction="row" spacing={2} >
            
                    <Button className="agregar">
                        Agregar Productos <AddShoppingCartTwoToneIcon/>
                    </Button>
        
                </Stack>
            </Link> 
                
            

            <Stack direction="row" spacing={2}>

                <Link to={'/checkout'}>
                <Button  variant="contained" color="success" className="seguir" >
                <AttachMoneyTwoToneIcon/>Pagar
                </Button>
                </Link>
            </Stack>
            </div>
           
        </div> 
        
    )
}