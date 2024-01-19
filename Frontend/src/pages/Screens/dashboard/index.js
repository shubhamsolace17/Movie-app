import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
  IconButton,
  Button,
  Pagination,
  Stack
} from "@mui/material";

import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { ArrowDownBoldCircle, PhoneLogOutline } from "mdi-material-ui";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { useRouter } from 'next/router';
import Cookies from "js-cookie";
import { useEffect } from "react";
import { _getAllMovies, _getMovies } from "src/services/api";
import { useState } from "react";


export const MovieList = ({ movies }) => {
  const router = useRouter();
  return (
    <Box width="100%">
      <Grid container spacing={3}>
        {movies.map((movie, index) => (
          <Grid item xs={12} sm={6} md={3} lg={3} key={index}>
            <Card style={{ backgroundColor: "#002B39", height: "auto" }} onClick={() => {
              const params = { movieId: movie._id };
              router.push({
                pathname: '/update-movie',
                query: params,
              });

            }}>

              <CardMedia
                component="img"
                height="200"
                style={{ borderRadius: "15px", padding: 10 }}
                image={
                  "https://mui.com/static/images/cards/live-from-space.jpg"
                }
              />
              <CardContent>
                <Typography
                  style={{ color: "#fff" }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {movie?.title}
                </Typography>
                <Typography
                  style={{ color: "#fff" }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {movie?.publishingYear}
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
  const router = useRouter();
  const [moviesData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(false);
  const movies = [
    { title: "Movie 1" /* other details */ },
    { title: "Movie 2" /* other details */ },
    { title: "Movie 3" /* other details */ },
    { title: "Movie 4" /* other details */ },
    { title: "Movie 5" /* other details */ },
    { title: "Movie 6" /* other details */ },

    { title: "Movie 7" /* other details */ },
    { title: "Movie 8" /* other details */ },
    // Add more movies as needed
  ];
  const handleAddMovie = () => {
    // Add logic for adding a movie
    console.log("Add movie clicked");
    router.push('/add-movie')
  };


  useEffect(() => {
    async function fetchData() {
      console.log("initialData")
      await _getAllMovies()
        .then((response) => {
          if (response.success) {
            console.log('response.data[0]', response.data)
            if (response?.data && response?.data?.data?.length > 0) {
              setMovieData(response?.data?.data)
              setLoading(false);
            } else {
              setLoading(false);
            }
          } else {
            alert(response.message);
            setLoading(false);
          }
        })
        .catch((error) => {
          setLoading(false);
          alert(error);
        });
    }
    fetchData()
  }, [])

  const handleLogout = () => {
    // Add logic for logout

    Cookies.set("loggedin", "false");
    router.push('/login')
    console.log("Logout clicked");
  };

  return (
    <>
      <Box flexDirection="column" alignItems="center" height="100vh">
        <Box style={{ padding: 20 }} maxWidth="1100px" mx="auto">
          <Grid container alignItems="center" color="white" padding={2}>
            <Grid item xs={9} container alignItems="center" spacing={2}>
              <Typography style={{ color: "#fff" }} variant="h6">
                Create Movie
              </Typography>
              <IconButton color="inherit" onClick={handleAddMovie}>
                <AddCircleRoundedIcon />
              </IconButton>
            </Grid>
            <Grid item xs={3} container justifyContent="flex-end">
              <Button
                color="inherit"
                endIcon={<LogoutRoundedIcon />}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Box style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
          {/* MovieList aligned with Logout button */}
          <MovieList movies={moviesData} />
        </Box>

        <Box style={{ padding: "2%", display: "flex", justifyContent: "center" }}>
          <Stack spacing={2} alignContent={"center"}>
            <Pagination count={10} color="primary" />
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
