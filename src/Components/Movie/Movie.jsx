import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//style
import Spinner from 'react-bootstrap/Spinner';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../Movie/Movie.css';
import { Container } from "react-bootstrap";



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
  const fetchSearch = async (value) => {
    if (value) {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=14bdd69ce887376edfafb09f23f78fe9&query=${value} `);
      setMovieData(res.data.results);
    }
    else { loadMovies(); }
  }

  const handleSearch = async (value) => {
    fetchSearch(value);
    setValueSearch(value);
  }


  //select
  const handelType = (event) => {
    setFilterValue(event.target.value);
    onFilter(event.target.value)
  }
  const onFilter = (type) => {
    const filtered = movieDatatwo.filter((item) =>
      item.media_type === type
    )
    setMovieData(filtered);

  }


  return (
    <>
      <div className=" ">

        {/* search and select */}

        <div className="searchSelect">
          <Container>
            <div className="searchSelectele">
              <div className="searchstyle">

                <TextField fullWidth id="standard-basic" variant="standard"
                  placeholder="Find movies tv shows documentary and more ..."
                  value={searchValue}
                  onChange={(e) => handleSearch(e.target.value)}
                  InputProps={{
                    startAdornment: (<SearchIcon position="start"
                    > </SearchIcon >),
                  }} />
              </div>

              <div className="selectstyle">
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel>Media Type</InputLabel>
                  <Select autoWidth id="type" onChange={handelType}>
                    <MenuItem > <em>None</em></MenuItem>
                    <MenuItem value="movie"> movie</MenuItem>
                    <MenuItem value="tv"> tv</MenuItem>
                    <MenuItem value="person"> person</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </Container>
        </div>

        {/* list of movies*/}

        <Container>
          <h2 className="py-3 "> Latest Movies & Tv Shows  </h2>
          <div className="row">
            {movieData.map((movie) => {
              return (
                <Card key={movie.id} sx={{ maxWidth: 345, margin: '10px', position: 'relative' }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
                    title="green iguana"
                  />

                  <CardContent>
                    <Typography gutterBottom variant="h5" >
                      {movie.title || movie.original_name}
                    </Typography>
                    <Typography variant="p" color="text.secondary">
                      Original Language: {movie.original_language}
                    </Typography>
                  </CardContent>
                  <div className="moicon">{movie.vote_average}</div>
                  <CardActions>
                    <Typography gutterBottom variant="h6" className="bg-primary p-2 borderstyle" >
                      <Link className=" text-decoration-none text-white"
                        to={`/details/${movie.media_type}/${movie.id}`}>Details</Link>
                    </Typography>
                  </CardActions>
                </Card>
              )
            })}
          </div>
        </Container>

      </div >
    </>

  )
}
export default Movie;




