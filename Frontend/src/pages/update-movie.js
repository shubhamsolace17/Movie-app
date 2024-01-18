// ** React Imports
import { useState } from "react";
import { useRouter } from "next/router";
import BlankLayout from "src/@core/layouts/BlankLayout";
import MovieScreen from "src/@core/components/common/MovieScreen";
import { _upadteMovies } from "src/services/api";

const UpdateMovie = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
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
