import ConfirmButton from "../components/buttons/confirm";
import SenhaInput from "../components/inputs/senha";
import EmailInput from "../components/inputs/email";
import CpfInput from "../components/inputs/cpf";
import NomeInput from "../components/inputs/nome";
import { Grid, Container } from "@material-ui/core";

export default function Revendedor()
{
    return (
        <Container maxWidth="sm">
            <Grid container alignItems="flex-start" justify="flex-start" spacing={2}>
                <Grid item xs={12}>
                    <NomeInput />
                </Grid>
                <Grid item xs={8}>
                    <CpfInput />
                </Grid>
                <Grid item xs={8}>
                    <EmailInput />
                </Grid>
                <Grid item xs={8}>
                    <SenhaInput />
                </Grid>
                <Grid item xs={12}>
                    <ConfirmButton url="/login">Cadastrar</ConfirmButton>
                </Grid>
            </Grid>
        </Container>
    );
}