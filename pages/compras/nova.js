import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export default function Compras()
{
    const [codigo, setCodigo] = useState("");
    const [senha, setSenha] = useState("");
    return (
    <div>
        <TextField 
            id="codigo" 
            label="Codigo" 
            onBlur={ (e) => setEmail(e.target.value) }
            />
        <TextField 
            id="senha" 
            label="Senha" 
            autoComplete="current-password"
            type="password"/>
        <Button variant="contained" color="primary">
            Cadastrar
        </Button>
    </div>);
}