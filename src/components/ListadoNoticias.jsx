import { Grid, Typography, Pagination, Stack } from "@mui/material";
import useNoticias from "../hooks/useNoticias";
import { Noticia } from "./Noticia";

export const ListadoNoticias = () => {
  const { noticias, totalNoticias, handleChangePagina, pagina } = useNoticias();
  const totalPaginas = Math.ceil(totalNoticias / 20); // redondea hacia arriba
  return (
    <>
      <Typography variant="h4" textAlign={"center"} marginY={5}>
        Listado de noticias
      </Typography>
      <Grid container spacing={2}>
        {noticias.map((noticia) => (
          <Noticia key={noticia.url} noticia={noticia} />
        ))}
      </Grid>

      <Stack
        spacing={2}
        direction={"row"}
        alignItems={"center"}
        sx={{ marginTop: 3 }}
        justifyContent={"center"}
      >
        <Pagination
          count={totalPaginas}
          color="primary"
          onChange={handleChangePagina}
          page={pagina}
        />
      </Stack>
    </>
  );
};
