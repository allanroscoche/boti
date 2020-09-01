import { TextField, InputAdornment } from "@material-ui/core";
import NumberFormat from 'react-number-format';

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator="."
      decimalSeparator=","
      decimalScale={2}
      isNumericString
    />
  );
}
export default function ValorInput() {
    return <TextField 
            label="Valor" 
            fullWidth={true}
            InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                inputComponent: NumberFormatCustom
            }}
             />
}