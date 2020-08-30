import TextField from "@material-ui/core/TextField";

export default function ValorDisplay({valor}) {
    return <TextField 
            label="Valor" 
            defaultValue={valor}
            InputProps={{ readOnly=true }}
            type="text" />
}