import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './Components/NavBar';
import NavBar from './Components/NavBar';
import ItemListContaainer from './Components/ItemListContainer';
import { blue, red } from '@mui/material/colors';
import Body from './Components/Body';
import Footer from './Components/Footer';

function App() {
  return (
    <div >
      
      <NavBar/>

      <ItemListContaainer greetingWelcom={(true)} greeting={(false)} color={"blue"} letra={'30px'} boton={(false)}/>
      <Body/>
      <ItemListContaainer greetingWelcom={(false)} greeting={(false)} boton={(true)}/>
      <ItemListContaainer greetingWelcom={(false)} greeting={(true)} color={"red"} boton={(false)}/>


      <Footer fondo={"#31AAC1"} ubicacion={"center"} />
       
    </div>
  );
}

export default App;
