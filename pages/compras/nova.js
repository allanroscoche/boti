import React, {useState} from 'react';
import { Grid } from "@material-ui/core";
import CodigoInput from "../../components/inputs/codigo";
import ValorInput from "../../components/inputs/valor";
import DataInput from "../../components/inputs/data";
import ConfirmButton from '../../components/buttons/confirm';

export default function Compras()
{
    return (
    <Grid container spacing={2} direction="column" justify="center" alignItems="center">
        <Grid item xs={4}>
            <CodigoInput />
        </Grid>
        <Grid item xs={4}>
            <ValorInput />
        </Grid>
        <Grid item xs={4}>
            <DataInput />
        </Grid>
        <Grid item xs={4}>
            <ConfirmButton url="/compras" >Cadastrar</ConfirmButton>
        </Grid>
    </Grid>);
}