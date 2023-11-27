import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import './Movie/Movie.css';


const MovieCard = ({ movie }) => {
  return (
    <Card className="text-light" key={movie.id} sx={{ width: '100%', maxWidth: 375, margin: '10px', position: 'relative', background: '#181818' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        title="green iguana"
      />

      <CardContent>
        <Typography gutterBottom variant="h5">
          {movie.title || movie.original_name}
        </Typography>
      </CardContent>
      <div className="moicon">{movie.vote_average}</div>
      <CardActions>
        <Typography gutterBottom variant="h6" className="btnn p-2 borderstyle">
          <Link className="text-decoration-none btnn" to={`/details/${movie.media_type}/${movie.id}`}>
            Details
          </Link>
        </Typography>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
