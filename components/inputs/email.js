import TextField from "@material-ui/core/TextField";

export default function EmailInput() {
    return <TextField 
            label="Email" 
            fullWidth={true}
            type="email" />
}