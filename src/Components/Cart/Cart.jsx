import React from "react";
import { useCartContext } from "../../context/CartContext";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Stack from '@mui/material/Stack';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { Link } from "react-router-dom";
import ItemCart from "../itemCart/ItemCart";
import AttachMoneyTwoToneIcon from '@mui/icons-material/AttachMoneyTwoTone';
import AddShoppingCartTwoToneIcon from '@mui/icons-material/AddShoppingCartTwoTone';
import './cart.css';
import {addDoc,collection,getFirestore} from 'firebase/firestore';
import { Collections } from "@mui/icons-material";

export default function Cart ({product}){

    const {cart, totalPrecio} = useCartContext();

    const order ={
        buyer:{
            name:'pablo',
            email:'pablo@gmail.com',
            telefono:'1112345678',
            address:'asdd'
        },

        items: cart.map(product => ({id:product.id,titulo:product.nombre,precio:product.precio,quantity:product.quantity})),
        total:totalPrecio(),
    }

    const handleClick = () => {

        const db = getFirestore();
        const ordersCollection = collection(db,'orders');
        addDoc(ordersCollection,order)
        .then(({id})) 
          return(

            <>
             <Link to={'/checkout'}></Link>
            </>
          )      


    }


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
                <Button  variant="contained" color="success" className="seguir" onClick={handleClick}>
                <AttachMoneyTwoToneIcon/>Pagar
                </Button>
                </Link>
            </Stack>
            </div>
           
        </div> 
        
    )
}