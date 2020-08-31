import TextField from "@material-ui/core/TextField";

export default function DataInput() {
    return <TextField 
            label="Data" 
            defaultValue={(new Date()).toISOString().split('T')[0]}
            type="date" />
}