import { Typography, Box } from "@material-ui/core";

export default function CodigoDisplay({codigo}) {
    return (
        <Box>
          <Typography gutterBottom variant="h6" component="h2">
            Codigo: #{codigo}
          </Typography>
        </Box>
    );
}