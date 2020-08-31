import { TextField, InputAdornment } from "@material-ui/core";

export default function ValorInput() {
    return <TextField 
            label="Valor" 
            fullWidth={true}
            InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>,
            }}
            type="number" />
}