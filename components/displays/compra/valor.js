import ValorDisplay from "../cashback/valor";
import { Typography } from "@material-ui/core";

export default function ValorCompraDisplay({valor}) {
    return (
        <Typography>Valor: R${valor}</Typography>
    );
}