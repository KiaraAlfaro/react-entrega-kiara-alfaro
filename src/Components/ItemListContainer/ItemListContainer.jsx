import React from "react";
import { useState,useEffect } from "react";
import './itemlistcontainer.css';
import ItemList from '../itemList/ItemList';
import { useParams } from "react-router-dom";
import { getFirestore,collection, getDocs,query,where } from "firebase/firestore";

export default function ItemListContainer (){
 
   
    
    
      
    const [arrayDeProductos, setArrayDeProductos] = useState([]);

    const{categoriaId} = useParams();

    useEffect(() =>{

        const querydb = getFirestore();
        const queryCollection = collection(querydb,'productos');
        
       
        if(categoriaId){

            const queryFilter = query(queryCollection,where('category','==',categoriaId))

            getDocs(queryFilter)
                .then(res => setArrayDeProductos(res.docs.map(product =>({id: product.id,...product.data()}))))
            
        }else {

            getDocs(queryCollection)
                .then(res => setArrayDeProductos(res.docs.map(product =>({id: product.id,...product.data()}))))
            
        }


        
            
    },[categoriaId])


    

    return(
        <>
            <h1>-THE CAT SHOP-</h1>

            <div className="productos"> 
                <ItemList item={arrayDeProductos}/>
            </div>
        
        </>
       
    )
}

