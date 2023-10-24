import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


function Details() {
  const [movieData, setMovieData] = useState({});

  const { id, media_type } = useParams()
  console.log('m', media_type);
  // const params = useParams();
  // console.log('params', params);

  useEffect(() => {
    const loadDetails = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/${media_type}/${id}?api_key=14bdd69ce887376edfafb09f23f78fe9`)
        setMovieData(res.data);
        console.log(movieData)
      }
      catch (error) {
        console.log("error")
      }
    }
    loadDetails();
  }, []);


  return (
    <div>{movieData.title}</div>)
}
export default Details;

