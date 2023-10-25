import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import './Details.css';

//style
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from "@mui/material";



function Details() {
  const [movieDetails, setMovieDetails] = useState({});
  const { id, media_type } = useParams()
  // console.log('m', media_type);

  useEffect(() => {
    const loadDetails = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/${media_type}/${id}?api_key=14bdd69ce887376edfafb09f23f78fe9`)
        setMovieDetails(res.data);
        // console.log(movieDetails)

      }
      catch (error) {
        console.log(error)
      }
    }
    loadDetails();
  }, []);


  let hour = Math.floor(movieDetails.runtime / 60);


  return (
    <>
      <div className="project__item">

        <figure className="imgBackdrop">
          <img src={"https://image.tmdb.org/t/p/w500" + movieDetails.backdrop_path} />
        </figure>

        <div >
          <Container className="py-1">
            <div className="content ">
              <figure className="imgPoster ">
                <img src={"https://image.tmdb.org/t/p/w500" + movieDetails.poster_path} />
              </figure>

              <div className="col-7 bg-primary">
                <CardContent>
                  <Typography gutterBottom variant="h3">
                    {movieDetails.title}
                  </Typography>
                  <Typography variant="p" >
                    {movieDetails.overview}
                  </Typography>

                  <div className="two m-4 ">
                  <Typography gutterBottom variant="P">
                    <Link className=" text-decoration-none text-white"
                      to={movieDetails.homepage}>WATCH THE TRAILER</Link></Typography>
                    <Typography gutterBottom variant="P">
                      {hour} h
                    </Typography>
                    <div>
                    {movieDetails.genres?.map((item) => {
                      return (
                        <Typography key={item.id} gutterBottom variant="P">
                          {item.name}.  </Typography>
                        
                      )
                    })}</div>
                    <Typography gutterBottom variant="P" >
                      {movieDetails.release_date}
                    </Typography>
                  </div>

                  <div className="three">
                    <Typography variant="h6" >
                      {movieDetails.vote_average}
                    </Typography>
                    <Typography variant="h6" >
                     <span className="text-secondary">Status: </span>{movieDetails.status}
                    </Typography></div>

                </CardContent>
              </div>

            </div>
          </Container>
        </div>
      </div>


    </>
  )
}
export default Details;

