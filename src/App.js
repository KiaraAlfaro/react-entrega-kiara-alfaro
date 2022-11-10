
import './App.css';
import ItemListContaainer from './Components/ItemListContainer';
import NavBar from './Components/NavBar';

import Footer from './Components/Footer';
import ItemDetailContainer from './Components/ItemDetailContainer';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemList from './Components/ItemList';

function App() {
  return (
    

    <BrowserRouter>
      

      <NavBar/>

      <Routes>

          <Route path='/' element={<ItemListContaainer greetingWelcom={(true)} greeting={(false)} boton={(false)} catalogo = {(false)} />} />
          <Route path='/productos' element={<ItemListContaainer greetingWelcom={(false)} greeting={(false)} boton={(false)} catalogo = {(true)} />}/>
          <Route path='/categoria/:idcategoria' element={<ItemList/>} />
          

      </Routes>


      <Footer fondo={"#31AAC1"} ubicacion={"center"} />
       
      </BrowserRouter>
  );
}

export default App;
