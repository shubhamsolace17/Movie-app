import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
  IconButton,
  Button
} from "@mui/material";

import { ArrowDownBoldCircle, PhoneLogOutline } from 'mdi-material-ui';

export const MovieList = ({ movies }) => {
  return (
    <Box width="100%">
      <Grid container spacing={3}>
        {movies.map((movie, index) => (
          <Grid item xs={12} sm={6} md={3} lg={3} key={index}>
            <Card style={{ backgroundColor: "#002B39", height: "auto" }}>
              <CardMedia
                component="img"
                height="350"
                style={{ borderRadius: "15px", padding: 10 }}
                image={"https://mui.com/static/images/cards/live-from-space.jpg"}
              />
              <CardContent>
                <Typography style={{ color: "#fff" }} gutterBottom variant="h5" component="div">
                  {movie.title}
                </Typography>
                <Typography style={{ color: "#fff" }} gutterBottom variant="h5" component="div">
                  2021
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};


const Dashboard = () => {
  const movies = [
    { title: "Movie 1" /* other details */ },
    { title: "Movie 2" /* other details */ },
    { title: "Movie 3" /* other details */ },
    { title: "Movie 4" /* other details */ },
    { title: "Movie 5" /* other details */ },
    { title: "Movie 6" /* other details */ },

    { title: "Movie 7" /* other details */ },
    { title: "Movie 8" /* other details */ },
    { title: "Movie 9" /* other details */ },
    { title: "Movie 10" /* other details */ },
    { title: "Movie 11" /* other details */ },
    { title: "Movie 12" /* other details */ },
    { title: "Movie 13" /* other details */ },
    { title: "Movie 14" /* other details */ },
    // Add more movies as needed
  ];
  const handleAddMovie = () => {
    // Add logic for adding a movie
    console.log('Add movie clicked');
  };

  const handleLogout = () => {
    // Add logic for logout
    console.log('Logout clicked');
  };

  return (
    <>
   <Box display="flex" flexDirection="column" alignItems="center" height="100vh">
      <Box width="70vw" maxWidth="1200px" mx="auto">
        <Grid container alignItems="center" bgcolor="primary.main" color="white" padding={2}>
          <Grid item xs={10} container alignItems="center" spacing={2}>
            <Typography style={{ color: "#fff" }} variant="h6">Create Movie</Typography>
            <IconButton color="inherit" onClick={handleAddMovie}>
              <ArrowDownBoldCircle />
            </IconButton>
          </Grid>
          <Grid item xs={2} container justifyContent="flex-end">
            <Button color="inherit" startIcon={<PhoneLogOutline />} onClick={handleLogout}>
              Logout
            </Button>
          </Grid>
        </Grid>
        {/* MovieList aligned with Logout button */}
        <MovieList movies={movies} />
      </Box>
    </Box>
    </>
  );
};

export default Dashboard;
