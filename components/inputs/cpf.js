import { FormControl, InputLabel, Input } from "@material-ui/core";
import { useState } from "react";
import { cpf } from "cpf-cnpj-validator";

export default function CpfInput() {

    const [cpfState, setCpf] = useState("");
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        const cpf = e.target.value;
        const size = cpf.length;
        if(size < 12) {
            setCpf(cpf);
            if(size > 10) {
                validate(cpf);
            }
        } 
    }
    const validate = (cpfInput) => {
        setError(!cpf.isValid(cpfInput));
    }

    return (
        <FormControl>
            <InputLabel htmlFor="cpf-input">Cpf</InputLabel>
            <Input
            onChange={handleChange}
            onBlur={() => validate(cpfState)}
            name="cpf"
            value={cpfState}
            error={error}
            id="cpf-input"
            />
        </FormControl>);
}