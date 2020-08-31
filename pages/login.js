import React, {useState} from 'react';
import EmailInput from '../components/inputs/email';
import SenhaInput from '../components/inputs/senha';
import ConfirmButton from '../components/buttons/confirm';
import { Grid, Container } from "@material-ui/core";

export default function Login()
{
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    return (
        <Grid 
            container 
            justify="center" 
            alignItems="center"
            spacing={2} 
            direction="column">
            <Grid item xs={8}>
                <EmailInput id="email-login"/>
            </Grid>
            <Grid item xs={8}>
                <SenhaInput id="senha-login"/>
            </Grid>
            <Grid item xs={12}>
                <ConfirmButton url="/compras">Entrar</ConfirmButton>
            </Grid>
        </Grid >
    );
}