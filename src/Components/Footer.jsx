import React from "react";

import HouseSidingRoundedIcon from '@mui/icons-material/HouseSidingRounded';
import { positions } from "@mui/system";

export default function Footer ({fondo,ubicacion}){

    return(
        
        <div style={{ background:fondo, textAlign:ubicacion}}>

        <HouseSidingRoundedIcon />ARKI 
        <p>Todos los derechos reservados ©2022</p>
            
        </div>
    )
}