
import './App.css';
import NavBar from './Components/nav/NavBar';
import React from 'react';
import Footer from './Components/footer/Footer';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/itemDetailContainer/ItemDetailContainer';
import Cart from './Components/Cart/Cart';

import CartProvider from './context/CartContext';
import Checkout from './Components/checkout/Checkout';

function App() {
  return (
     

    <BrowserRouter>     
      <CartProvider>
        <NavBar/>
          <Routes>

            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/categoria/:categoriaId' element={<ItemListContainer/>} />
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>} />
            <Route path='/Cart' element={<Cart/>} />
            <Route path='/checkout' element={<Checkout/>} />
            
          </Routes>
          </CartProvider>   
        <Footer  ubicacion={"center"} />
     
    </BrowserRouter>

  );
}

export default App;
