import React, { Children, useState,useContext } from "react";
const CartContext = React.createContext([]);

export const useCartContext = () => useContext( CartContext);

export default function CartProvider  ({children}) {

 const [cart, setCart]= useState([]);

 
 const addProduct = (item, quantity) => {

    if(isInCart(item.id)){
        setCart(cart.map(product => {
            return product.id === item.id? {...product, quantity: product.quantity + quantity}: product
        }));
    }else{
        setCart([...cart,{...item,quantity}]);
    }
 } 
 
 const totalPrecio = () =>{
    return cart.reduce((prev,act)=> prev + act.quantity * act.precio, 0);
 }

 const totalProducts = () => cart.reduce((acumulador,productoActual) => acumulador + productoActual.quantity,0);

 const clearCart =() => setCart([]);

 const isInCart =(id) => cart.find (product => product.id === id)? true : false;

 const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

 
 

    return(

        <CartContext.Provider  value={{

            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            totalPrecio,
            totalProducts,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}