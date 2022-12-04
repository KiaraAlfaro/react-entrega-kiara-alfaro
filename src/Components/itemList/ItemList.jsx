import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Item from "../Item/Item";



export default function ItemList ({item}){

    return(

        <>

            {item.map((item) => {
                return(
                    <div key={item.id}>
                    <Item product={item}/>
                    </div>
                    
                )
            })}
        </>
    )
}