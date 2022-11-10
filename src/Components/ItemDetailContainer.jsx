
import React,{useEffect, useState} from "react";
import ItemDetail from './ItemDetail/ItemDetail';

const producto =  {id:1, img:"https://www.grupoconstruya.com.ar/notas/26296.jpg", nombre:"Ladrillo Portantes",descripcion:"Ladrillo Hueco Ceramico Portantes P18 18x19x33cm Pallet x 90",precio: 32400 };

export default function  ItemDetailContainer ()  {

    
    const [data,setData] = useState({});

    useEffect(()=>{

        const getData = new Promise((resolve, reject) => {
            
            setTimeout(() =>{

                resolve(producto);
            },2000);
        });

        getData.then(res => setData(res))

        .catch((err) => console.log(err))
    },[])

    return(

        
        <ItemDetail data={data}/>
        
    );
}
