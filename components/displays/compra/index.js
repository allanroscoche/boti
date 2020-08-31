import CodigoDisplay from "./codigo";
import DataDisplay from "./data";
import ValorCompraDisplay from "../compra/valor";
import CashBackDisplay from "../cashback/index";
import { Card, CardContent, Grid } from "@material-ui/core";

export default function CompraDisplay({
    compra: { codigo, valor, data, cashback }
    }) {
    return (
        <Card >
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12} >
                        <CodigoDisplay codigo={codigo} />
                    </Grid>
                    <Grid item xs={6} >
                        <ValorCompraDisplay valor={valor} />
                    </Grid>
                    <Grid item xs={6} >
                        <DataDisplay data={data} />
                    </Grid>
                    <Grid item xs={6} >
                        <CashBackDisplay cashback={cashback} valor={valor} />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}