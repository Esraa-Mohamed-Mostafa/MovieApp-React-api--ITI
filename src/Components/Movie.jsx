import axios from "axios";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import { Link } from "react-router-dom";


const Movie = () => {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchValue, setValueSearch] = useState('');


  const loadMovies = async () => {
    try {
      const res = await axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=14bdd69ce887376edfafb09f23f78fe9");
      //console.log(res.data.results);
      setMovieData(res.data.results);
      console.log(movieData)
      setLoading(false);
    }
    catch (error) {
      setLoading(false);
      setError("error from server");
    }
  }
  useEffect(() => {
    loadMovies();
  }, []);


  if (loading) {
    return <>
      <div className="d-flex justify-content-center align-items-center py-5">
        <Spinner style={{ color: 'black', width: '8rem', padding: '4rem' }} animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner> </div></>
  }

  if (error) {
    return <p>{error}</p>;
  }

  const fetchSearch = async (value) => {
    if (value) {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=14bdd69ce887376edfafb09f23f78fe9&query=${value} `);
      setMovieData(res.data.results);
      // setValueSearch('')
      // console.log(searchValue)
    }
    else { loadMovies(); }
  }

  const handleSearch = async (value) => {
    fetchSearch(value);
    setValueSearch(value);
  }

  
  return (
    <>
      <div className="py-3 ">
        <div className="container">
          <input type="text" placeholder="search "
            value={searchValue}
            onChange={(e) => handleSearch(e.target.value)}
          />

          <button>s</button>


          <h2 className="py-3 ">
            movies          </h2>
          <div className=" card-deck">
            <div className=" row">
              {movieData.map((movie) => {
                return (
                  <div key={movie.id} className=" card me-2" style={{ width: '13rem' }}>
                    {/* <Card.Img orientation="top" className="card-img-top p-4" src={product.image} /> */}
                    <Card.Body>
                      <h4 >{movie.title}</h4>
                      {/* <span>
                                          <Rate className=" my-3 w-75" defaultValue={product.rating.rate} allowHalf /></span>*/}
                      {/* <span className=" bg-dark p-2 rounded-circle">
                          <Link className=" text-decoration-none text-white"
                            to={`/details/${movie.id}`}>Details</Link></span> */}

                      <span className=" bg-dark p-2 rounded-circle">
                        <Link className=" text-decoration-none text-white"
                          to={`/details/${movie.media_type}/${movie.id}`}>Details</Link>
                      </span>

                    </Card.Body>
                  </div>
                )
              })}
            </div></div>
        </div></div >
    </>)
}
export default Movie;




