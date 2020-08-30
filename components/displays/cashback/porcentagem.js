import TextField from "@material-ui/core/TextField";

export default function PorcentagemDisplay() {
    return <TextField 
            label="Data" 
            value="%"
            aria-readonly
            type="date" />
}