import CodigoDisplay from "./codigo";
import ValorDisplay from "./valor";
import DataDisplay from "./data";
import { Card, CardContent, Grid } from "@material-ui/core";

export default function CompraDisplay({
    compra: { codigo, valor, data }
    }) {
    return (
        <Card >
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12} >
                        <CodigoDisplay codigo={codigo} />
                    </Grid>
                    <Grid item xs={3} >
                        <ValorDisplay valor={valor} />
                    </Grid>
                    <Grid item xs={3} >
                        <DataDisplay data={data} />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}