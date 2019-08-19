import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard.js';
const Movie = (props) => {
  const [movie, setMovie] = useState();
  // console.log(props);
  useEffect(() => {
    const id = props.match.params.id;

    // const id=1;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[props.match.params.id]);
  
  // Uncomment this only when you have moved on to the stretch goals
  const saveMovie = (props) => {
    // console.log(props)
    const addToSavedList = props.addtosavedlist;
    addToSavedList(movie)
  }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

 
  return (
    <div className="save-wrapper">
      <MovieCard movie={movie}/>
      <div onClick={()=>saveMovie(props)} className="save-button">Save</div>
    </div>
  );
}

export default Movie;
