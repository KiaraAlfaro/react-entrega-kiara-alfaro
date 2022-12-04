
import React from "react";
import { Link } from "react-router-dom";
import { useState,useEffect} from "react";

import './item.css';

import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Stack from '@mui/material/Stack';

import { styled } from '@mui/material/styles';
import { blue, purple } from '@mui/material/colors';


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





    
 