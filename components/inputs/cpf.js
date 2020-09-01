import { FormControl, InputLabel, Input } from "@material-ui/core";
import { useState } from "react";
import MaskedInput from "react-text-mask";
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
                validate();
            }
        } 
    }
    const format = (value) => {
        return value;
    }
    const validate = (e) => {
        setError(!cpf.isValid(cpfState));
    }

    return (
        <FormControl>
            <InputLabel htmlFor="cpf-input">Cpf</InputLabel>
            <Input
            onChange={handleChange}
            onBlur={validate}
            name="cpf"
            value={format(cpfState)}
            error={error}
            id="cpf-input"
            />
        </FormControl>);
}