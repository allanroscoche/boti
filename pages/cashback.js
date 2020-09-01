import React, { useState, useEffect } from 'react';
import { Grid, Typography } from "@material-ui/core";
import Axios from 'axios';

export default function CashBack()
{
    const [cashback, setCashback] = useState(0);
    const [error, setError] = useState(false);

    useEffect( () => {
        async function fetchCashback() {
            try {
                let resp = await Axios.get('/api/cashback');
                setCashback(resp.data.valor);
            } catch(e) {
                setError(true);
            }
        }
        fetchCashback();
        
    }, [])

    return (
        <Grid 
            container 
            justify="center" 
            alignItems="center"
            spacing={2} 
            direction="column">
            <Grid item xs={8}>
                <Typography>
                    Total CashBack: R$ {cashback} 
                </Typography>
            </Grid>
        </Grid >
    );
}