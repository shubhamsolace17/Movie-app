// ** React Imports
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import BlankLayout from "src/@core/layouts/BlankLayout";
import MovieScreen from "src/@core/components/common/MovieScreen";
import { _getSingleMovie, _upadteMovies } from "src/services/api";
import SpinnerLoader from "src/@core/components/Loader";

let count = 0;
const UpdateMovie = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [movieID, setMovieID] = useState();
  const { movieId } = router.query;
  const [movieData, setMovieData] = useState();
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


  useEffect(() => {
      loadData(movieId)
  }, [movieId]);


  const loadData  = async(id) =>{
    await _getSingleMovie(id)
    .then((response) => {
      setMovieID(id)
      console.log("sdsd",response)
      if (response.success) {
        const finalData = response?.movieDetail;
        console.log('response.data[0]', response.data,finalData)
        const obj = {
          title : finalData.title,
          year:finalData.publishingYear,
          image:finalData.poster
        }
        console.log("ojbje",obj)
        setMovieData(obj)
        setLoading(false);
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

  const updateMovie = async (val) => {
    console.log("bsjadbnasd",val)
    let formData = new FormData();
    formData.append("title", val.title); //append the values with key, value pair
    formData.append("publishingYear", val.year);
    formData.append("poster", val.image);
    console.log("ffd",formData)
    await _upadteMovies(movieID,formData)
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

  console.log("moo",movieData)

  return (
    <>
      {movieData && Object.values(movieData).length > 0 ? (
         <MovieScreen
         value={movieData}
         pageTitle={"Edit"}
         isEdit={true}
         onSubmit={(val) => {
           updateMovie(val);
         }}
         isMobile={isMobile}
         onImageChange={(img)=>{
          console.log("sdsksj",img)
          setMovieData({
            ...movieData,
            image:img
          })
         }}
       />
      ):<SpinnerLoader/>
      }
    </>
   
  );
};
UpdateMovie.getLayout = (page) => <BlankLayout>{page}</BlankLayout>;

export default UpdateMovie;
