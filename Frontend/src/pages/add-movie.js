// ** React Imports
import { useState,useEffect } from "react";
import { useRouter } from "next/router";
import BlankLayout from "src/@core/layouts/BlankLayout";
import MovieScreen from "src/@core/components/common/MovieScreen";
import { _AddMovies } from "src/services/api";

const AddMovie = () => {
  const router = useRouter();

  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    console.log("window.screen.availWidth",window.screen.availWidth)
    if (window.screen.availWidth >= 1024) {
      setIsMobile(false);
    }else{
      setIsMobile(true);
    }
    window.addEventListener('resize', onScreenResize);
    return (() => 
    {
      window.removeEventListener('resize', onScreenResize)
  
  })
  }, [])

  function onScreenResize() {
    setIsMobile(window.screen.availWidth <= 1023);
  }


  const [loading, setLoading] = useState(false);
  const addMovie = async (val) => {
    let formData = new FormData();
    formData.append("title", val.title); //append the values with key, value pair
    formData.append("publishingYear", val.year);
    formData.append("poster", val.image);
    console.log("pass", val, formData);
    await _AddMovies(formData)
      .then((response) => {
        console.log("trrrsdsd", response);
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
      isMobile={isMobile}
      onSubmit={(val) => {
        addMovie(val);
      }}
    />
  );
};
AddMovie.getLayout = (page) => <BlankLayout>{page}</BlankLayout>;

export default AddMovie;
