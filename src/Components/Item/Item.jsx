
import React from "react";
import { Link } from "react-router-dom";
import './item.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';



export default function Item({product}) {

  return (

    <>

      <div className="cards">

          <img className="img" src={product.img} alt="" />
          <h3>{product.nombre}</h3>
          <h4>Cantidad de Stock: {product.productos}</h4>
          <h3>${product.precio}</h3>

          <div className="botonDetalle">
          <Link to={`/detalle/${product.id}`}>
            <Stack direction="row" spacing={2}>
              
                <Button >
                Ver detalle 
                </Button>
             
              

              </Stack>
            </Link>
          </div> 

      </div>     

    </>   
  );
}





    
 