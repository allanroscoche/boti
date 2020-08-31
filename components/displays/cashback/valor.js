import { Typography } from "@material-ui/core";

export default function CashBackValorDisplay({valor}) {
    return (
        <Typography>R$ {valor}</Typography>
    );
}