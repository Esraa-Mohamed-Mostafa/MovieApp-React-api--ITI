import axios from "axios";
import { useEffect, useState } from "react";
//style
import Spinner from 'react-bootstrap/Spinner';
import * as React from 'react';
import '../Movie/Movie.css';

import { Container } from "react-bootstrap";

import SwiperSlider from '../SwiperSlider';

import MovieCard from '../MovieCard';

import MovieFilters from '../MovieFilters';

const Movie = () => {
  const [movieData, setMovieData] = useState([]);
  const [movieDatatwo, setMovieDatatwo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchValue, setValueSearch] = useState('');
  const [filterValue, setFilterValue] = useState('');



  const loadMovies = async () => {
    try {
      const res = await axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=14bdd69ce887376edfafb09f23f78fe9");
      //console.log(res.data.results);
      setMovieData(res.data.results);
      setMovieDatatwo(res.data.results);
      //console.log(movieData)
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

  //loading
  if (loading) {
    return <>
      <div className="d-flex justify-content-center align-items-center py-5">
        <Spinner style={{ color: 'black', width: '8rem', padding: '4rem' }} animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner> </div></>
  }

  //error
  if (error) {
    return <p>{error}</p>;
  }


  // search

  const handleSearch = async (value) => {
    if (value) {
      const res = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=14bdd69ce887376edfafb09f23f78fe9&query=${value}`);
      setMovieData(res.data.results);
    } else {
      loadMovies();
    }
    setValueSearch(value);
  };

  //select
  const handelType = (event) => {
    setFilterValue(event.target.value);
    onFilter(event.target.value);
  };

  const onFilter = (type) => {
    const filtered = movieDatatwo.filter((item) => item.media_type === type);
    setMovieData(filtered);
  };

  return (
    <>
      <SwiperSlider />

      <div className=" bgcolor ">

        {/* search and select */}
        <MovieFilters handleSearch={handleSearch} handelType={handelType} />

        {/* list of movies*/}
        <Container>
          <h2 className="py-3 text-light "> Latest Movies & Tv Shows  </h2>
          <div className="direction">
            <div className="row">
              {movieData.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}

            </div>
          </div>
        </Container>

      </div >

    </>

  )
}
export default Movie;






