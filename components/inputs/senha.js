import TextField from "@material-ui/core/TextField";

export default function SenhaInput() {
    return (
        <TextField 
            label="Senha" 
            fullWidth={true}
            autoComplete="current-password"
            type="password"/>
    );
}