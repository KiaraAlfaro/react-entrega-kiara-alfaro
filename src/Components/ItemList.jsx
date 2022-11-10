import React, { useEffect, useState } from "react";
import Item from './Item';

import { useParams } from "react-router-dom";

export default function ItemList(){

    const Productos = [

        {id:1, nombre:"Ladrillo Portantes",precio: 32400 ,categoria: "muros"},
        {id:2, nombre:"Ladrillo Portantes",precio: 39400 ,categoria: "muros"},
        {id:3, nombre:"Ladrillo Losa",precio: 20980, categoria: "losa" },
    ];

    const {idcategoria} = useParams;

    const [Catalogue, setCatalogue] = useState([])

    useEffect(() =>{

        const fetching = new Promise((resolve, reject) => {
            
            setTimeout(() =>{
                resolve(Productos)
            },2000);
        });

        fetching.then((res) =>{

            if(idcategoria){

                setCatalogue(res.filter ((item) => item.categoria == idcategoria));
                 

            }else{

                setCatalogue(res);
            }
            
        })
        .catch((err) => console.log(err))

    },[idcategoria])

    return(

        Catalogue.map (item => {

            return  <div key={item.id}><Item nombre={item.nombre} precio={item.precio} id={item.id}/></div>
        })
    )
    
}