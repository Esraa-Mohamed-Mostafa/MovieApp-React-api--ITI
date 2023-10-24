import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import './Details.css';





import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from "@mui/material";



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
    <>


      <div class="project__item">
        <figure class="project__img">
          {/* <CardMedia
            sx={{ height: 500 }}
            image={"https://image.tmdb.org/t/p/w500/" + movieData.backdrop_path}
            title="green iguana"
          /> */}
        </figure>

        <div >
          <Container className="py-1">


            <div sx={{ maxWidth: 345, margin: '10px',display:'flex' }}>


              <CardMedia
                sx={{ height: 140 }}
                image={"https://image.tmdb.org/t/p/w500/" + movieData.poster_path}
                title="green iguana"
              />
              {/* <Card.Img orientation="top" className="card-img-top p-4" src={product.image} /> */}

              <CardContent>
                <Typography gutterBottom variant="h3" component="div">
                  {movieData.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {movieData.overview}
                </Typography>

                <Typography gutterBottom variant="h5" component="div">
                  {movieData.release_date}
                </Typography>

                <Typography gutterBottom variant="h5" component="div">
                  {movieData.runtime}
                </Typography>

              

              {movieData.genres?.map((item) => {

                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
              })}

              <CardActions>

                <Button variant="contained" href="#contained-buttons">

                </Button>

                {/* <span> <Rate className=" my-3 w-75" defaultValue={product.rating.rate} allowHalf /></span>*/}

              </CardActions></CardContent>
            </div></Container>
        </div>
      </div>


    </>
  )
}
export default Details;

