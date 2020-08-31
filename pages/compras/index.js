import React, {useState} from 'react';
import Link from "next/link";
import CompraDisplay from "../../components/displays/compra/index"
import { Container, Grid, Typography, Button } from '@material-ui/core';

export default function Compras()
{
    const compras = [ 
        { codigo: "001", valor: 40.12, data: new Date(Date.parse("2020-08-29")), cashback: 4.01}, 
        { codigo: "003", valor: 12.32, data: new Date(Date.parse("2020-08-22")), cashback: 0.12}
    ]
    return (
    <Container maxWidth="sm">
        <Grid container justify="center" spacing={2}>
            <Grid item xs={12}>
                <Typography gutterBottom variant="h6" component="h2">
                    Compras:
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Link href="/compras/nova" >
                    <Button variant="contained">Nova Compra</Button>
                </Link>
            </Grid>
            { compras.map( (compra) => (
                <Grid key={compra.codigo} item xs={12}>
                    <CompraDisplay compra={compra} />
                </Grid>
                ))}
        </Grid>
    </Container>);
}