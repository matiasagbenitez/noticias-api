import { Container, Grid, Typography } from "@mui/material";
import { Formulario } from "./components/Formulario";
import { NoticiasProvider } from "./context/NoticiasProvider";

function App() {
  return (
    <NoticiasProvider>
      <Container maxWidth="sm">
        <header>
          <Typography
            align="center"
            marginY={5}
            component="h1"
            variant="h2"
            fontWeight={600}
          >
            Portal de Noticias
          </Typography>
        </header>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Formulario />
          </Grid>
        </Grid>
      </Container>
    </NoticiasProvider>
  );
}

export default App;
