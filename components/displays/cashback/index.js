import CashBackValorDisplay from "./valor";
import { Typography, Grid } from "@material-ui/core";

export default function CashBackDisplay({cashback, valor}) {
    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <Typography>CashBack:</Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography>R${cashback}</Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography>{Math.round((cashback/valor)*100,2)}%</Typography>
            </Grid>
        </Grid>
    );
}