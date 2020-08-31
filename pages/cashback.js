import React, {useState} from 'react';
import { Grid, Container } from "@material-ui/core";

export default function Login()
{
    return (
        <Grid 
            container 
            justify="center" 
            alignItems="center"
            spacing={2} 
            direction="column">
            <Grid item xs={8}>
                Total CashBack: R$ 1231.12
            </Grid>
        </Grid >
    );
}