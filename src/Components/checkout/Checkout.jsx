import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function Cart ({product}){

    return(
        <>
        <div className='datos'>
            <h1>Completa tus datos:</h1>
            <div>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                >
                <div>
                    <TextField
                    required
                    id="outlined-required"
                    label="Nombre"
                    defaultValue="kiara alfaro"
                    />

                    <TextField
                    required
                    id="outlined-required"
                    label="E-mail"
                    defaultValue="ejemplo@gmail.com"
                    />

                    <TextField
                    required
                    id="outlined-required"
                    label="Telefono"
                    defaultValue="1123456789"
                    />
                </div>
            </Box>

            </div>
        </div>
        <div>
            Resumen de compra
        </div>
        </>
    )


}


