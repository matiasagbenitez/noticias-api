import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
  Grid,
} from "@mui/material";

export const Noticia = ({ noticia }) => {
  const { title, description, urlToImage, url, source } = noticia;

  return (
    <Grid item md={6} lg={4}>
      <Card>
        {urlToImage && (
          <CardMedia
            component="img"
            height="200"
            image={urlToImage}
            alt="Imagen noticia"
          />
        )}

        <CardContent>
          <Typography variant="body1" color="error">
            {source.name}
          </Typography>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2">{description}</Typography>
        </CardContent>

        <CardActions>
          <Link
            href={url}
            target="_blank"
            variant="button"
            width={"100%"}
            textAlign={"center"}
            sx={{ textDecoration: "none" }}
          >
            Ver noticia completa
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};
