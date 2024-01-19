// ** React Imports
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import BlankLayout from "src/@core/layouts/BlankLayout";
import MovieScreen from "src/@core/components/common/MovieScreen";
import { _upadteMovies } from "src/services/api";
import { Alert } from "mdi-material-ui";

const UpdateMovie = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [movieID, setMovieID] = useState();
  const { movieId } = router.query;
  const [movieData, setMovieData] = useState();

  useEffect(() => {
    setMovieID(movieId)
    try {
      const response = _getSingleMovie(movieId);
      const finalData = response?.data?.movieDetail;
      if (response?.success) {
        setMovieData(finalData)
      }
    } catch (error) {
      console.log(error)
      Alert.alert(error)
    }

  }, [movieId])


  const updateMovie = async (val) => {
    const data = {
      title: val.title,
      publishingYear: val.year,
      poster: val.img,
    };
    await _upadteMovies(data)
      .then((response) => {
        if (response?.success) {
          setLoading(false);
          router.push("/dashboard");
        } else {
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        alert("Error!", err);
      });
  };

  return (
    <MovieScreen
      title={movieData?.title}
      year={movieData?.year}
      pageTitle={"Edit"}
      isEdit={true}
      onSubmit={(val) => {
        updateMovie(val);
      }}
    />
  );
};
UpdateMovie.getLayout = (page) => <BlankLayout>{page}</BlankLayout>;

export default UpdateMovie;
