import React, {useState} from 'react';
import CompraDisplay from "../../components/displays/compra/index"
import { Container, Grid, Typography} from '@material-ui/core';

export default function Compras()
{
    const compras = [ 
        { codigo: "001", valor: 40.12, data: "123"}, 
        { codigo: "003", valor: 12.32, data: "321"}
    ]
    return (
    <Container maxWidth="sm">
        <Grid container justify="center" spacing={2}>
            <Grid item xs={12}>
                <Typography>Compras:</Typography>
            </Grid>
            { compras.map( (compra) => (
                <Grid key={compra.codigo} item xs={12}>
                    <CompraDisplay compra={compra} />
                </Grid>
                ))}
        </Grid>
    </Container>);
}