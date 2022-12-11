import React,{useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useCartContext } from "../../context/CartContext";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {addDoc,doc,updateDoc,collection,getFirestore} from 'firebase/firestore';
import { increment } from 'firebase/firestore';
import './checkout.css'; 
import { Link } from 'react-router-dom';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import CheckoutResumen from './CheckoutResumen';

export default function Cart ({product}){

    
 
    const [name, setName]= useState("");
    const [email, setEmail]= useState("");
    const [tel, setTel]= useState("");

    const [orderId, setOrderId]= useState("");

    const {cart, totalPrecio,clearCart} = useCartContext();

    function validateEmail (email){

        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if(reg.test(email)== false){

            alert('E-mail NO valido')
            return false;
        }
        return true;
    }

    function final(){

        const order = {

            buyer:{name,email, tel},
            items: cart.map(product => ({id:product.id,titulo:product.nombre,precio:product.precio,quantity:product.quantity})),
            total:totalPrecio(),

        };
      
        const db = getFirestore();
        const orders = collection(db,'orders');

        if(!name || !email || !tel){

            alert('Complete el formulario')
            return
        }
        if(validateEmail(email)== false){
            return
        }



        addDoc(orders,order).then(({id}) =>{

            setOrderId(id);
            clearCart();

            cart.forEach((item)=>{

                const documento = doc(db, 'productos', item.id);
                updateDoc(documento,{productos: increment(-item.quantity)});
            })
        }) ;
    
        

    }

    return(
        
        <>


        
            {orderId
            
            ?(<div className='msjFinal'>
                
                <h1>GRACIAS POR COMPRAR EN CATSKI</h1>
                <h2>Tu compra ha sido confirmada!!</h2>
                <h3>El numero de compra es:</h3>{orderId}
                <Link to={"/"}>
                    <Stack direction="row" spacing={2} className='btnSeguir'>

                        <Button  variant="contained" color="success" className="seguir">
                        Seguir comprando<ShoppingCartRoundedIcon/>
                        </Button>

                    </Stack>
                </Link>
                
                </div> )
            : 

            ( 

            <div className='seccionDatos'>

                <div className='formulario'>
                        <p className='titulo'>COMPLETA TUS DATOS:</p>
                        
                        <div>

                            <Box
                                component="form"
                                sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                                >

                                <div className='form2'>
                                        <TextField
                                        required
                                        id="outlined-required"
                                        label="Nombre Completo"
                                        defaultValue="Nombre y Apellido"
                                        onChange={(e) => setName(e.target.value)}
                                        />
                                        <TextField
                                        required
                                        id="outlined-required"
                                        label="Telefono/Celular"
                                        defaultValue="1123456789"
                                        onChange={(e) => setTel(e.target.value)}
                                        />
                                        <TextField
                                        required
                                        id="outlined-required"
                                        label="E-mail"
                                        defaultValue="ejemplo@gmail.com"
                                        onChange={(e) => setEmail(e.target.value)}
                                        />
                                </div>        
                            </Box>





                        </div>

                        <Stack direction="row" spacing={2}>
                        
                            <Button  onClick={final}  className="confirmar">
                                Confirmar Compra 
                                
                            </Button>

                        </Stack>

                </div>

                <div className='resumen'>
               
                    <h3 className='tituloResumen'>TICKET DE COMPRA</h3>
                    {
                    cart.map(product => <CheckoutResumen key={product.id} product={product}/>)
                    }
                    <div className="botonTotal" >
                        <p className="nombreTotal">TOTAL:</p>
                        <p>${totalPrecio()}</p>
                    </div>

                </div>

            </div>


            )}

        </>
    )


}


