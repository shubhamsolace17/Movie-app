// ** React Imports
import { useState } from "react";
import { useRouter } from "next/router";
import BlankLayout from "src/@core/layouts/BlankLayout";
import MovieScreen from "src/@core/components/common/MovieScreen";
import { _AddMovies } from "src/services/api";

const AddMovie = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const addMovie = async (val) => {
    const data = {
      title: val.title,
      publishingYear: val.year,
      poster: val.img,
    };
    await _AddMovies(data)
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
      pageTitle={"Create Movie"}
      isEdit={false}
      onSubmit={(val) => {
        addMovie(val);
      }}
    />
  );
};
AddMovie.getLayout = (page) => <BlankLayout>{page}</BlankLayout>;

export default AddMovie;
