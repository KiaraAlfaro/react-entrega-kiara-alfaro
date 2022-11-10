import React from "react";
import './ItemDetail.css';
import ItemListContaainer from "../ItemListContainer";

export default function  ItemDetail ({data}) {

    return(

        <div className="container">

            <div className="detail">
                <img  className='detailImg' src={data.img} alt="" />
                
                <div className="contenido">

                    <h1> {data.nombre} </h1>
                    <h2>{data.descripcion}</h2>
                    <h3>${data.precio}</h3>
                </div>

                <ItemListContaainer greetingWelcom={(false)} greeting={(false)} boton={(true)} catalogo = {(false)} />

            </div>
        </div>
    );
}
