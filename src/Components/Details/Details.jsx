import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

//style
import '../Details/Details.css';
import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import StarBorderIcon from '@mui/icons-material/StarBorder';



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



  return (
      <div className="project__item">

        <figure className="imgBackdrop">
          <img src={"https://image.tmdb.org/t/p/w500" + movieDetails.backdrop_path} />
        </figure>

        <div >
          <div className=" container py-1">
            <div className="content ">
              <figure className="imgPoster me-5 ">
                <img src={"https://image.tmdb.org/t/p/w500" + movieDetails.poster_path} />
              </figure>

              <div className=" col-lg-6 ">
                <CardContent className="cardcontent">
                  <Typography className="my-4 text-light" gutterBottom variant="h3">
                    {movieDetails.title|| movieDetails.original_name}
                  </Typography>
                  <Typography  className="my-4" variant="p" >
                    {movieDetails.overview}
                  </Typography>

                  <div className="contenttwo m-4 ">
                  <Typography gutterBottom variant="P">
                    <PlayCircleOutlineIcon sx={{ fontSize: 40 }} className="me-3"></PlayCircleOutlineIcon>
                    <Link className="text-decoration-none text-dark"
                      to={movieDetails.homepage}>WATCH THE TRAILER</Link></Typography>
                    <Typography  sx={{ fontSize: 18 }} gutterBottom variant="p">
                      {movieDetails.runtime || movieDetails.episode_run_time} Min
                    </Typography>
                    <div>
                    {movieDetails.genres?.map((item) => {
                      return (
                        <Typography sx={{ fontSize: 18}} key={item.id} gutterBottom variant="p">
                          {item.name}.  </Typography>
                      )
                    })}</div>
                    <Typography gutterBottom variant="p" sx={{ fontSize: 18 }} >
                      {movieDetails.release_date || movieDetails.first_air_date}
                    </Typography>
                  </div>

                  <div className="contentthree m-4 text-dark">
                    <Typography variant="h6" >
                      <StarBorderIcon sx={{ fontSize: 34 }} className="mx-3"></StarBorderIcon>
                      {movieDetails.vote_average}
                    </Typography>
                    <Typography variant="h6" >
                     <span style={{fontSize: 25 }} className="text-secondary">Status: </span>{movieDetails.status}
                    </Typography></div>

                </CardContent>
              </div>

            </div>
          </div>
        </div>
      </div>
  )
}
export default Details;

