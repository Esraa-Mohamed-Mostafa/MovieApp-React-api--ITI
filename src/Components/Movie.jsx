import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import { Link } from "react-router-dom";



import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';





import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';





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

  // function onFilter(event) {
  //   setFilterValue(event.target.value);
  //   let match= movieData.filter((item) => 
  //    item.media_type.includes(filterValue)
  //     )
  //      setMovieData(match)
  // { return item.a === true; }
  // else if (filterValue=== 'b') { return item.a === false; }
  // else { return item; }


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
      <div className="py-3 ">
        <div className="container">

          <div style={{ display: 'flex', justifyContent: 'space- between' }}>

            <TextField id="standard-basic" label="search" variant="standard"
              value={searchValue}
              onChange={(e) => handleSearch(e.target.value)} >
            </TextField>
            <SearchIcon position="start"> </SearchIcon>

            <FormControl>
              <InputLabel>Media Type</InputLabel>
              <Select id="type" onChange={handelType}>
                <MenuItem value=""> ...</MenuItem>
                <MenuItem value="movie"> movie</MenuItem>
                <MenuItem value="tv"> tv</MenuItem>
                <MenuItem value="person"> person</MenuItem>
              </Select>
            </FormControl>

          </div>

          <h2 className="py-3 ">
            movies          </h2>
          <div className="row">
            {movieData.map((movie) => {
              return (
                <Card key={movie.id} sx={{ maxWidth: 345, margin: '10px' }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
                    title="green iguana"
                  />
                  {/* <Card.Img orientation="top" className="card-img-top p-4" src={product.image} /> */}

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {movie.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards
                    </Typography>
                  </CardContent>
                  <CardActions>

                    <Button variant="contained" href="#contained-buttons">
                      <Link className=" text-decoration-none text-white"
                        to={`/details/${movie.media_type}/${movie.id}`}>Details</Link>
                    </Button>

                    {/* <span> <Rate className=" my-3 w-75" defaultValue={product.rating.rate} allowHalf /></span>*/}

                  </CardActions>
                </Card>
              )
            })}
          </div>
        </div></div >
    </>

  )
}
export default Movie;




